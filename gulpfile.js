const gulp = require('gulp');
const sass = require('gulp-ruby-sass');

gulp.task('default', () =>
    sass('scss/basscss.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('dist'))
);