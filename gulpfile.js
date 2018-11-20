const gulp = require('gulp');
const concat = require('gulp-concat');
// const browserify = require('browserify');
// const gutil = require('gulp-util');
// const notify = require('gulp-notify');
// const uglify = require('gulp-uglify');
// const jshint = require('gulp-jshint');
// const sourcemaps = require('gulp-sourcemaps');
// const rename = require('gulp-rename');

// gulp.task('css', function() {
//     return gulp.src('./**/*.css')
//         .pipe(gulp.dest('./dist/styles'));
// });


gulp.task('scripts', function() {
    return gulp.src(['./index.js', './components/**/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('./index.js', ['scripts']);
});