/* global process */
/**
 * File containing most of the configuration variables
 */
var config = (function () {
    var _this = this;
    _this.client = './public';
    
    /**
     * Database Config Data
     */
    _this.databaseConfig = {
        url: process.env.DB_URL || 'mongodb://dummy:dummy@ds061355.mongolab.com:61355/csk-db-dev'
    };
    
    /**
     * Server Environment Config Data
     */
    _this.serverConfig = {
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'dev',
        secret: process.env.SECRET || 'SIDEKICK'
    };
    
    /**
     * Paths
     */
    _this.paths = {
        root: '.',
        client: _this.client,
        css: _this.client + '/css',
        js: _this.client + '/js'
    };
    
    /**
     * Gulp Config Data
     */
    _this.gulpConfig = {
        tsConfigJson: {
            tsOrder: [
                '**/application.ts',
                '**/*-services.ts',
                '**/application-*.ts',
                '**/*-directive.ts',
                '**/*-controller.ts'
            ],
            tsConfig: {
                "compilerOptions": {
                    module: 'commonjs',
                    target: 'es5',
                    removeComments: true,
                    noImplicitAny: true,
                    sourceMap: true,
                    noImplicitReturns: true,
                    noFallthroughCasesInSwitch: true,
                    allowUnreachableCode: false,
                    outFile: _this.paths.js + '/app.js'
                }
            }
        },
        minifyOpts: {
            ext: {
                min: '.min.js'
            },
            ignoreFiles: ['-min.js', '.min.js']
        },
        nodemonOpts: {
            script: 'server.js',
            ext: 'js html less ts',
            delayTime: 3
        },
        cssnanoOpts: {
            convertValues: false,
            discardComments: { removeAll: true },
            autoprefixer: false
        }
    };

    return {
        database: _this.databaseConfig,
        server: _this.serverConfig,
        gulp: _this.gulpConfig,
        paths: _this.paths
    }
})();

module.exports = config;