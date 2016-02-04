// imported modules
var mongoose = require('mongoose');
var passwordHash = require('password-hash');

var userModel = (function () {
    /**
     * Model Schema
     */
    var User = new mongoose.Schema({
        username: { type: String, required: true, index: { unigue: true }, min: 5 },
        firstName: { type: String, required: true, index: { unigue: true }, min: 2 },
        lastName: { type: String, required: true, index: { unigue: true }, min: 2 },
        middleName: { type: String, required: true, index: { unigue: true }, max: 1 },
        email: { type: String, required: true, index: { unigue: true } },
        password: { type: String, required: true, select: true, min: 6 },
        dateCreated: { type: Date, default: Date.now },
        isAnAdmin: { type: Boolean, default: false }
    });

    /**
     * Run before saving to mongodb.
     * TODO: Add description.
     */
    User.pre('save', function (next) {
        var _this = this;

        if (!_this.isModified('password')) return next();

        _this.password = passwordHash.generate(_this.password);

        next();
    });

    /**
     * Check user password against user hashed password
     */
    User.methods.comparePassword = function (password) {
        var self = this;

        return passwordHash.verify(password, self.password);
    };
    
    /**
     * Save user if does not exist
     */
    User.statics.signup = function (callback) {

        var query = { $or: [{ username: this.username }, { email: this.email }] };

        this.findOne(query, function (err, data) {

            if (err) callback(err, null);

            if (data) callback({ message: "Email or Username taken" }, null);
            
            this.save(function (err) {
                    // check for errors
                    if (err) callback(err, null);

                    // return success message
                    return callback(null, { success: true, message: 'User Created' });
                });
        });
    };

    // TODO: Create statics methods to handle mongodb calls. Like ( getUser(), userExist(), etc. ) 
    
    return mongoose.model('User', User);
})();

// export model
module.exports = userModel;