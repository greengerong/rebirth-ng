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

var cmpGenConfig = {
  componentSelector: '',
  componentName: '',
};

var config = {
  root: './src',
  src: './src/app/exports',
  dest: './dist',
  lib: './lib',
  aot: './aot',
  newCmpTmpl: './build/new-cmp-template'
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

gulp.task('new:config', function () {
  gulp.src('./src/app/shared/demo/demo-config.service.ts')
    .pipe(insertLines({
      'before': /\/\/\scomponent\simport/i,
      'lineBefore': `  ${cmpGenConfig.componentName}DemoComponent,`
    }))
    .pipe(insertLines({
      'before': /\/\/\scomponent\sdeclare/i,
      'lineBefore': `    {
      name: '${cmpGenConfig.componentName}',
      directory: '${cmpGenConfig.componentSelector}',
      cmp: ${cmpGenConfig.componentName}DemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/${cmpGenConfig.componentSelector}/README.md'),
      html: require('!raw-loader!../../demo/${cmpGenConfig.componentSelector}/${cmpGenConfig.componentSelector}-demo.component.html'),
      ts: require('!raw-loader!../../demo/${cmpGenConfig.componentSelector}/${cmpGenConfig.componentSelector}-demo.component.ts'),
    },`
    }))
    .pipe(gulp.dest('./src/app/shared/demo', {overwrite: true}));
});

gulp.task('new:demo', function () {
  gulp.src(`${config.newCmpTmpl}/demo/*.*`)
    .pipe(rename(function (path) {
      if (path.basename.indexOf('$template$') !== -1) {
        path.basename = path.basename.replace('$template$', cmpGenConfig.componentSelector);
      }
    }))
    .pipe(ejs(cmpGenConfig))
    .pipe(gulp.dest(`./src/app/demo/${cmpGenConfig.componentSelector}`));
});

gulp.task('new:lib', ['new:demo', 'new:config'], function () {
  gulp.src(`${config.newCmpTmpl}/exports/*.*`)
    .pipe(rename(function (path) {
      if (path.basename.indexOf('$template$') !== -1) {
        path.basename = path.basename.replace('$template$', cmpGenConfig.componentSelector);
      }
    }))
    .pipe(ejs(cmpGenConfig))
    .pipe(gulp.dest(`./src/app/exports/${cmpGenConfig.componentSelector}`));
});

gulp.task('new:cmp', function (cb) {
  // gulp new:cmp --ComponentName
  cmpGenConfig.componentName = process.argv.slice(2)[1].replace(/^(-+)/, '');
  cmpGenConfig.componentSelector = cmpGenConfig.componentName.replace(/([A-Z])/g, '-$1').replace(/^(-+)/, '').toLowerCase();
  runSequence(['new:demo', 'new:config', 'new:lib'], cb);
});


gulp.task('prepublish', function (cb) {
  runSequence(['clean:dist', 'copy:exports', 'ng2:inline', 'ng2:aot', 'prenpm'], cb);
});

gulp.task('sw:gen', function (callback) {
  const stripPrefixMulti = {};
  stripPrefixMulti[config.dest] = 'https://greengerong.github.io/rebirth-ng';
  swPrecache.write(`${config.dest}/service-worker.js`, {
    staticFileGlobs: [config.dest + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefixMulti: stripPrefixMulti
  }, callback);
});
