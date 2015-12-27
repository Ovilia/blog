var gulp        = require('gulp');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var jekyll      = require('gulp-jekyll');

/**
 * Compile files from _style into css
 */
gulp.task('sass', function () {
    return gulp.src('_style/general.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: function(e) {
                console.error(e);
            },
            outputStyle: 'compressed'
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(rename('default.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('_site/css'));
});

/**
 * Minify js
 */
gulp.task('compress', function() {
    return gulp.src('js/common.js')
        .pipe(uglify())
        .pipe(rename('common.min.js'))
        .pipe(gulp.dest('js'));
});

/**
 * Build with Jekyll
 */
gulp.task('jekyll', function () {
    return gulp.src(['.'])
        .pipe(jekyll({
            source: '.',
            destination: '_site'
        }))
        .pipe(gulp.dest('_site'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_style/*.scss', ['sass']);
    gulp.watch('js/common.js', ['compress']);
    gulp.watch(['js/*.js', 'css/*.css'], ['jekyll']);
    gulp.watch(['*.html', '_posts/*', '_layouts/*', '_includes/*'], ['jekyll']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['compress', 'sass', 'watch']);
