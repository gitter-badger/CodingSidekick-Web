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
        url: '' || ''
    }
    
    /**
     * Server Environment Config Data
     */
    var serverConfig = {
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'dev'
    }
    
    /**
     * Gulp Config Data
     */
    var gulpConfig = {
        lessSrc: _this.client + '/css/style.less',
        lessDest: _this.client + '/css'
    }

    return {
        database: databaseConfig,
        server: serverConfig,
        gulp: gulpConfig,
    }
})();

module.exports = config;