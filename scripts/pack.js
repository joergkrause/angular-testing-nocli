const gulp = require('gulp');

const inlineBuilder = require('./inline');

gulp.task('pack', function () {
  return inlineBuilder('./dist/app');
});
