// imported modules
var gulp = require('gulp');
var config = require('./server/config/config');
var glp = require('gulp-load-plugins')({ lazy: true });

/**
 * Less task
 */
gulp.task('styles', function () {
    return gulp
        .src(config.paths.css + '/style.less')
        .pipe(glp.less())
        .pipe(gulp.dest(config.paths.css));
});

/**
 * Create tsconfig.json task
 */
gulp.task('tsconfig', function () {
    var tsConfig = glp.tsconfig(config.gulp.tsConfigJson);

    return gulp.src([config.paths.client + "/**/*.ts"])
        .pipe(tsConfig())
        .pipe(gulp.dest(config.paths.root));
});

/**
 * Compile, Concat & minify typescript files
 */
gulp.task('ts-compile', ['tsconfig'], function () {
    var ts = glp.typescript;
    var tsProject = ts.createProject(config.paths.root + '/tsconfig.json');
    var minifyOpts = config.gulp.minifyOpts;

    return tsProject.src()
        .pipe(ts(tsProject)).js
        .pipe(glp.minify(minifyOpts))
        .pipe(gulp.dest(config.paths.root));
});

/**
 * Nodemon Task
 */
gulp.task('nodemon', function () {
    var nodemonOpts = config.gulp.nodemonOpts;

    glp.nodemon(nodemonOpts)
        .on('restart', ['styles']);
});

/**
 * Run default tasks
 */
gulp.task('default', ['styles', 'ts-compile']);