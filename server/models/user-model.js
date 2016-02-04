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
        email: { type: String, required: true, index: { unigue: true }, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
        password: { type: String, required: true, select: true, min: 6 },
        dateCreated: { type: Date, default: Date.now },
        isAnAdmin: { type: Boolean, default: false }
    });

    /**
     * Run before saving to mongodb.
     * Hash user password before saving it to the database
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
     * Save user if it do not exist
     */
    User.methods.signup = function (callback) {
        var _this = this;
        var query = { $or: [{ username: _this.username }, { email: _this.email }] };

        mongoose.model('User').findOne(query, function (err, data) {
            if (err)
                return callback(err, null);

            if (data)
                return callback(null, { success: false, message: "Email or Username taken" });

            _this.save(function (err) {
                if (err)
                    return callback(err, null);

                return callback(null, { success: true, message: 'User Created' });
            });
        });
    };

    return User;
})();

// export model
module.exports = mongoose.model('User', userModel);