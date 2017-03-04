var gulp = require('gulp');
var os = require('os');
var path = require('path');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var inlineNg2Template = require('gulp-inline-ng2-template');
var runSequence = require('run-sequence').use(gulp);
var exec = require('child_process').exec;
var del = require('del');
var gulpif = require('gulp-if');
var swPrecache = require('sw-precache');
var clean = require('gulp-clean');
var ejs = require('gulp-ejs');
var insertLines = require('gulp-insert-lines');

var minimist = require('minimist');
var camelCase = require('camelcase');

var knownOptions = {
  string: 'comp',
}
const component = minimist(process.argv.slice(2), knownOptions)
const comp = component.comp
const compCamel = camelCase(comp)
const compMsg = compCamel.replace(compCamel[0], compCamel[0].toUpperCase())

const config = {
  root: './src',
  src: './src/app/exports',
  dest: './dist',
  lib: './lib',
  aot: './aot'
};

function platformPath(path) {
  return /^win/.test(os.platform()) ? path + '.cmd' : path;
}

gulp.task('clean:dist', function () {
  return del.sync(config.dest, config.aot, config.lib);
});

gulp.task('copy:exports', ['clean:dist'], function () {
  return gulp.src([config.src + '/**/*.*'])
    .pipe(gulpif(/.+\.scss/g, sass({outputStyle: 'compressed'}).on('error', sass.logError)))
    .pipe(rename(function (path) {
      if (path.extname === '.css') {
        path.extname = '.scss';
      }
    }))
    .pipe(gulp.dest(config.dest));
});

gulp.task('ng2:inline', ['copy:exports'], function () {
  return gulp.src([config.dest + '/**/*.ts'])
    .pipe(inlineNg2Template({useRelativePaths: true, target: 'es5'}))
    .pipe(gulp.dest(config.dest + '/'));
});

gulp.task('ng2:aot', ['ng2:inline'], function (cb) {
  var executable = path.join(__dirname, platformPath('/node_modules/.bin/ngc'));
  exec(executable + ' -p ./dist/tsconfig-es2015.json', function (e) {
    if (e) {
      console.error(e);
    }
    del([config.aot, config.dest]);
    cb(e);
  }).stdout.on('data', function (data) {
    console.log(data);
  });
});

gulp.task('prenpm', ['ng2:aot'], function () {
  return gulp.src(['README.md', 'package.json', 'src/app/exports/**/*.d.ts'], {read: true})
    .pipe(gulp.dest(config.lib));
});

gulp.task('sw:code-gen', function (cb) {
  swPrecache.write(config.root + '/service-worker.js', {
    staticFileGlobs: [config.root + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: config.root
  }, cb);
});

gulp.task('prepublish', function (cb) {
  runSequence(['clean:dist', 'copy:exports', 'ng2:inline', 'ng2:aot', 'prenpm'], cb);
});

gulp.task('configNewComponent', function() {
  gulp.src('./src/app/shared/demo/demo-config.service.ts')
  .pipe(insertLines({
    'before': /\/\/\scomponent\simport/i,
    'lineBefore': `  ${compMsg}DemoComponent,`
  }))
  .pipe(insertLines({
    'before': /\/\/\scomponent\sdeclare/i,
    'lineBefore': `    {
      name: '${compMsg}',
      directory: '${comp}',
      cmp: ${compMsg}DemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/${comp}/README.md'),
      html: require('!raw-loader!../../demo/${comp}/${comp}-demo.component.html'),
      ts: require('!raw-loader!../../demo/${comp}/${comp}-demo.component.ts'),
    },`
  }))
  .pipe(gulp.dest('./src/app/shared/demo/demo-config.service.ts'))
})

gulp.task('createComponent', ['createDemo', 'configNewComponent'], function() {
  gulp.src("./template/component/*.*")
  .pipe(rename(function(path) {
    if (path.basename === 'index') {
      path = path
    } else {
      var name = path.basename.split('.')
      var finalBasename = ''
      name.map(function(tinyName) {
        if (tinyName === 'template') {
          finalBasename += 're-' + comp
        } else {
          finalBasename += '.' + tinyName
        }
      })
      path.basename = finalBasename
    }
  }))
  .pipe(ejs({
    compMsg: compMsg,
    comp: comp
  }))
  .pipe(gulp.dest(`./src/app/exports/re-${comp}`))
})

gulp.task('createDemo', function() {
  gulp.src("./template/demo/*.*")
  .pipe(rename(function(path) {
    if (path.basename === 'index') {
      path = path
    } else {
      var name = path.basename.split('.')
      var finalBasename = ''
      name.map(tinyName => {
        if (tinyName === 'template') {
          finalBasename += 're-' + comp
        } else {
          finalBasename += '.' + tinyName
        }
      })
      path.basename = finalBasename
    }
  }))
  .pipe(ejs({
    compMsg: compMsg,
    comp: comp
  }))
  .pipe(gulp.dest(`./src/app/demo/re-${comp}`))
})
