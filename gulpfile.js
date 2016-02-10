var gulp = require('gulp');
var config = require('./server/config/config');
var glp = require('gulp-load-plugins')({lazy: true});

gulp.task('styles', function () {
    return gulp
        .src(config.gulp.lessSrc)
        .pipe(glp.less())
        .pipe(gulp.dest(config.gulp.lessDest));
});

gulp.task('nodemon', function () {
    glp.nodemon({
        script: 'server.js',
        ext: 'js html',
        tasks: ['watch']
    });
});

gulp.task('watch', function () {
    gulp.watch(config.paths.css + '*.less', ['styles']);
});

gulp.task('default', ['nodemon', 'watch']);