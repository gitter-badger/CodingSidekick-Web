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
    var databaseConfig = {
        url: process.env.DB_URL ||'mongodb://dummy:dummy@ds061355.mongolab.com:61355/csk-db-dev'
    }
    
    /**
     * Server Environment Config Data
     */
    var serverConfig = {
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'dev',
        secret: process.env.SECRET || 'SIDEKICK'
    }
    
    /**
     * Gulp Config Data
     */
    var gulpConfig = {
        lessSrc: _this.client + '/css/style.less',
        lessDest: _this.client + '/css'
    }
    
    /**
     * Paths
     */
    var paths = {
        client: _this.client + '/',
        css: _this.client + '/css/',
        js: _this.client + '/js/'
    }
    
    var tsConfigOptions = {
        module: 'commonjs',
        target: 'es5',
        sourceMap: true,
        outFile: 'output.js'
    }

    return {
        database: databaseConfig,
        server: serverConfig,
        gulp: gulpConfig,
        tsConfigOptions: tsConfigOptions,
        paths: paths
    }
})();

module.exports = config;