// imported modules
var UserModel = require('../models/user-model');

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
                return res.status(200).send({ success: false, message: 'User validation failed', error: err });

            return res.status(200).send(data);
        });

    });
};

// export apis
module.exports = userApis;