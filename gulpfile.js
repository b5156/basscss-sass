const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const rename =require('gulp-rename');
gulp.task('default', function () {
        return sass('scss/basscss.scss')

            .on('error', sass.logError)
            .pipe(postcss([ autoprefixer({browsers: ['iOS 7', 'Android >= 4.0', '> 1%']}) ]))
            .pipe(gulp.dest('dist'))

    }
);

gulp.task('wxss', function () {
        return sass('scss/basscss.scss')
            .on('error', sass.logError)
            .pipe(rename({extname :'.wxss'}))
            .pipe(gulp.dest('dist'))

    }
);