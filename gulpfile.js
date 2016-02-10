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
        .pipe(gulp.dest(config.gulp.lessDest));
});

/**
 * Create tsconfig.json task
 */
gulp.task('tsconfig', function () {
    var tsConfig = glp.tsconfig(config.gulp.tsConfigJson);

    return gulp.src([config.paths.client + "**/*.ts"])
        .pipe(tsConfig())
        .pipe(gulp.dest(config.paths.root));
});

/**
 * Compile and Concat typescript file using tsconfig.json
 */
gulp.task('ts-compile', ['tsconfig'], function () {
    var ts = glp.typescript;
    var tsProject = ts.createProject('./tsconfig.json');
    
    return tsProject.src()
        .pipe(ts(tsProject)).js
        .pipe(gulp.dest(config.paths.root));
});

/**
 * Minify js
 */
gulp.task('minify-js', ['ts-compile'], function() {
  gulp.src(config.paths.js + 'app.js')
    .pipe(glp.minify({
        ext:{
            min:'.min.js'
        },
        ignoreFiles: ['-min.js', '.min.js']
    }))
    .pipe(gulp.dest(config.paths.js));
});

/**
 * Nodemon Task
 */
gulp.task('nodemon', function () {
    glp.nodemon({
        script: 'server.js',
        ext: 'js html less ts',
        delayTime: 3
    }).on('restart', ['styles']);
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
gulp.task('default', ['styles', 'minify-js']);