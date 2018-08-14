var gulp = require('gulp');
var rename = require("gulp-rename");
var runSequence = require('run-sequence').use(gulp);
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

gulp.task('new:config:demo-service', function () {
  return gulp.src('./src/app/shared/demo/demo-config.service.ts')
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
      readMe: require('!html-loader!markdown-loader!../../demo/${cmpGenConfig.componentSelector}/README.md'),
      html: require('!raw-loader!../../demo/${cmpGenConfig.componentSelector}/${cmpGenConfig.componentSelector}-demo.component.html'),
      ts: require('!raw-loader!../../demo/${cmpGenConfig.componentSelector}/${cmpGenConfig.componentSelector}-demo.component.ts'),
    },`
    }))
    .pipe(gulp.dest('./src/app/shared/demo', {overwrite: true}));
});

gulp.task('new:config:demo-index', function () {
  return gulp.src('./src/app/demo/index.ts')
    .pipe(insertLines({
      'before': /\/\/\scomponent\sexport/i,
      'lineBefore': `export * from './${cmpGenConfig.componentSelector}';`
    }))
    .pipe(gulp.dest('./src/app/demo', {overwrite: true}));
});

gulp.task('new:config:exports-api', function () {
  return gulp.src('./projects/rebirth-ng/src/public_api.ts')
    .pipe(insertLines({
      'before': /\/\/\scomponent\sexport/i,
      'lineBefore': `export * from './lib/${cmpGenConfig.componentSelector}/${cmpGenConfig.componentSelector}.component';
export * from './lib/${cmpGenConfig.componentSelector}/${cmpGenConfig.componentSelector}.module';
`
    }))
    .pipe(gulp.dest('./projects/rebirth-ng/src', {overwrite: true}));
});

gulp.task('new:config:rebirth-module', function () {
  return gulp.src('./projects/rebirth-ng/src/lib/rebirth-ng.module.ts')
    .pipe(insertLines({
      'before': /\/\/\smodule\simport/gi,
      'lineBefore': `import { ${cmpGenConfig.componentName}Module } from './${cmpGenConfig.componentSelector}/${cmpGenConfig.componentSelector}.module';`
    }))
    .pipe(insertLines({
      'before': /\/\/\smodule\sdeclare/i,
      'lineBefore': `    ${cmpGenConfig.componentName}Module,`
    }))
    .pipe(gulp.dest('./projects/rebirth-ng/src/lib/', {overwrite: true}));
});

gulp.task('new:config:app-module', function () {
  return gulp.src('./src/app/app.module.ts')
    .pipe(insertLines({
      'before': /\/\/\smodule\sdeclare/i,
      'lineBefore': `    ${cmpGenConfig.componentName}DemoModule,`
    }))
    .pipe(gulp.dest('./src/app', {overwrite: true}));
});


gulp.task('new:config', gulp.series([
  'new:config:demo-service',
  'new:config:demo-index',
  'new:config:exports-api',
  'new:config:rebirth-module',
  'new:config:app-module',
]));

gulp.task('new:demo', function () {
  // gulp new:cmp --ComponentName
  cmpGenConfig.componentName = process.argv.slice(2)[1].replace(/^(-+)/, '');
  cmpGenConfig.componentSelector = cmpGenConfig.componentName.replace(/([A-Z])/g, '-$1').replace(/^(-+)/, '').toLowerCase();

  return gulp.src(`${config.newCmpTmpl}/demo/*.*`)
    .pipe(rename(function (path) {
      if (path.basename.indexOf('$template$') !== -1) {
        path.basename = path.basename.replace('$template$', cmpGenConfig.componentSelector);
      }
    }))
    .pipe(ejs(cmpGenConfig))
    .pipe(gulp.dest(`./src/app/demo/${cmpGenConfig.componentSelector}`));
});

gulp.task('new:lib', function () {
  return gulp.src(`${config.newCmpTmpl}/exports/*.*`)
    .pipe(rename(function (path) {
      if (path.basename.indexOf('$template$') !== -1) {
        path.basename = path.basename.replace('$template$', cmpGenConfig.componentSelector);
      }
    }))
    .pipe(ejs(cmpGenConfig))
    .pipe(gulp.dest(`./projects/rebirth-ng/src/lib/${cmpGenConfig.componentSelector}`));
});

gulp.task('new:cmp', gulp.series('new:demo', 'new:config', 'new:lib'));
