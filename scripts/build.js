const gulp = require('gulp');
const typescript = require('gulp-typescript');

const tsProject = typescript.createProject('tsconfig.gulp.json');

gulp.task('build', function() {
  return tsProject.src()
      .pipe(tsProject())
      .js.pipe(gulp.dest('./dist/'));
});