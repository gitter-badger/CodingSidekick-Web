// imported modules
var gulp = require('gulp');
var config = require('./server/config/config');
var glp = require('gulp-load-plugins')({ lazy: true });

/**
 * Less compile task
 */
gulp.task('less-compile', function () {
    return gulp
        .src(config.paths.css + '/less/style.less')
        .pipe(glp.less())
        .pipe(gulp.dest(config.paths.css + '/'));
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

    return tsProject.src()
        .pipe(ts(tsProject)).js
        .pipe(gulp.dest(config.paths.root));
});

/**
 * CSS minify task
 */
gulp.task('minify-css', ['less-compile'], function () {
    return gulp.src(config.paths.css + '/style.css')
        .pipe(glp.cssnano(config.gulp.cssnanoOpts))
        .pipe(glp.rename('style.min.css'))
        .pipe(gulp.dest(config.paths.css + '/'));
});

/**
 * JS minify task
 */
gulp.task('minify-js', ['ts-compile'], function () {
    var minifyOpts = config.gulp.minifyOpts;

    gulp.src(config.paths.js + '/app.js')
        .pipe(glp.minify(minifyOpts))
        .pipe(gulp.dest(config.paths.js + '/'));
});

/**
 * Nodemon Task
 */
gulp.task('nodemon', function () {
    var nodemonOpts = config.gulp.nodemonOpts;

    glp.nodemon(nodemonOpts)
        .on('restart', ['less-compile']);
});

/**
 * Run default tasks
 */
gulp.task('default', ['minify-css', 'minify-js']);