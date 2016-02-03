var mongoose = require('mongoose');
var app = require('./server/config/express')();
var config = require('./server/config/config');

//mongoose.connect(config.database.url); => No Database String Available Yet

app.listen(config.server.port, function (err) {
    if (err) throw err;

    console.info('Application running at port: ' + config.server.port);
});