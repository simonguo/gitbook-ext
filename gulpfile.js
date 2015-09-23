var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');


gulp.task('p', function() {
    gulp.src('theme-pagurian/stylesheets/website.less')
        .pipe(less())
        .pipe(rename("style.css"))
        .pipe(gulp.dest('theme-pagurian/assets'));
});


gulp.task('d', function() {
    gulp.src('theme-default/stylesheets/website.less')
        .pipe(less())
        .pipe(rename("style.css"))
        .pipe(gulp.dest('theme-default/assets'));
});
