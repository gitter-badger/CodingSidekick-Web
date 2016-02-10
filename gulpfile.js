var gulp = require('gulp');
var config = require('./server/config/config');
var glp = require('gulp-load-plugins')({ lazy: true });
var nodemon = glp.nodemon;

gulp.task('styles', function () {
    return gulp
        .src(config.gulp.lessSrc)
        .pipe(glp.less())
        .pipe(gulp.dest(config.gulp.lessDest))
        .on('error', function () {
            nodemon.emit('restart');
        });
});

gulp.task('nodemon', function () {
    nodemon({
        script: 'server.js',
        ext: 'js html'
    });
});

gulp.task('watch', function () {
    gulp.watch(config.paths.css + '*.less', ['styles']);
});

gulp.task('default', ['nodemon', 'watch']);