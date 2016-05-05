var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');


gulp.task('styles', function() {
    var scssStream = gulp.src('app/sass/**/*.scss')
    .pipe(sass())
    .pipe(concat('scss-files.scss'));

    var mergedStream = merge(scssStream)
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('app/css'));

    return mergedStream
});

gulp.task('default',function() {
    gulp.watch('./app/sass/**/*.scss',['styles']);
});