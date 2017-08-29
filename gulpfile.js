const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const rename =require('gulp-rename');
gulp.task('default', function () {
        return sass('scss/basscss.scss')
            .on('error', sass.logError)
            .pipe(gulp.dest('dist'))
            .pipe(rename({extname :'.wxss'}))
            .pipe(gulp.dest('dist'))

    }
);