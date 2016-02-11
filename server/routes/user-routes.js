// imported modules
var UserModel = require('../models/user-model');

/**
 * User REST Api's
 */
function userApis(api) {
    /**
     * User sign up endpoint 
     */
    api.post('/signup', function (req, res) {
        var data = req.body;

        var user = new UserModel({
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            middleName: data.middleName,
            email: data.email,
            password: data.password
        });

        user.signup(function (err, data) {
            if (err)
                return res.send(err);

            return res.send(data);
        });

    });

    /**
     * User login endpoint
     */
    api.post('/login', function(req, res) {
        var data = req.body;

        if (!data)
            return res.send({ success: false, message: 'Login data empty' });

        var user = new UserModel();
        user.login(data, function (err, token) {

            if (err)
                return res.send({ success: false, message: 'Error while logging in' });

            return res.send({ success: true, message: 'User logged in', token: token});
        });
    });
}

// export apis
module.exports = userApis;