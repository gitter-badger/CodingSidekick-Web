var mongoose = require('mongoose');
var app = require('./server/config/express')();
var config = require('./server/config/config');

/**
 *  Run only when env === dev
 */
if (config.server.env === 'dev') {
    // Dev
}

/**
 * Connect to mongolab
 */
mongoose.connect(config.database.url, function(err){
    if (err) console.error(err);
});

/**
 * Listen to PORT
 */
app.listen(config.server.port, function (err) {
    if (err) throw err;

    console.info('Application running at port: ' + config.server.port);
});