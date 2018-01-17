const gulp = require('gulp');
const sequence = require('gulp-sequence');

require('./scripts/clean');
require('./scripts/copy');
require('./scripts/build');
require('./scripts/pack');

gulp.task('default', sequence('clean', 'copy', 'build', 'pack'));
