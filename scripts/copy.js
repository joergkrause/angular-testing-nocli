const gulp = require('gulp');
const uglify = require('gulp-uglify');
const print = require('gulp-print');
const concat = require('gulp-concat');

require('./make');

gulp.task('copy:html', function () {
  return gulp.src('./src/app/**/*.+(html|css)')
    .pipe(print())
    .pipe(gulp.dest('./dist/app'));
});

gulp.task('copy:vendor', function () {
  return gulp.src([ // glob pattern
    './node_modules/core-js/client/core.js',
    './node_modules/zone.js/dist/zone.js',
    './node_modules/systemjs/dist/system.js'
  ])
    .pipe(print())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js'))
});

gulp.task('copy:angular', function () {
  return gulp.src([
    './node_modules/@angular/**/bundles/*.umd.js',
    '!./node_modules/@angular/**/bundles/*-testing.umd.js'
  ])
    .pipe(uglify())
    .pipe(print())
    .pipe(gulp.dest('./dist/assets/js/lib/@angular'));
});

gulp.task('copy:tslib', function () {
  return gulp.src(['./node_modules/tslib/tslib.js'])
    .pipe(gulp.dest('./dist/assets/js/lib'));
});

gulp.task('copy:index', function () {
  return gulp.src(['./src/index.html', './src/favicon.ico'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy:systemjs', function () {
  return gulp.src([
    './src/systemjs.config.js'
  ]).pipe(gulp.dest('./dist/'))
});

gulp.task('copy:css', function () {
  return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('copy:data', function () {
  return gulp.src('./src/assets/data/**/*.*')
    .pipe(gulp.dest('./dist/data'));
});

gulp.task('copy', ['copy:html', 'copy:data', 'copy:css', 'copy:vendor', 'copy:tslib', 'make:rxjs', 'copy:angular', 'copy:index', 'copy:systemjs']);
