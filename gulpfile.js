// imported modules
var gulp = require('gulp');
var config = require('./server/config/config');
var glp = require('gulp-load-plugins')({ lazy: true });

/**
 * Less task
 */
gulp.task('styles', function () {
    return gulp
        .src(config.gulp.lessSrc)
        .pipe(glp.less())
        .on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(gulp.dest(config.gulp.lessDest));
});

/**
 * Nodemon Task
 */
gulp.task('nodemon', function () {
    glp.nodemon({
        script: 'server.js',
        ext: 'js html'
    });
});

/**
 * Gulp watch
 */
gulp.task('watch', function () {
    gulp.watch(config.paths.css + '*.less', ['styles']);
});

/**
 * Run default tasks
 */
gulp.task('default', ['nodemon', 'styles', 'watch']);