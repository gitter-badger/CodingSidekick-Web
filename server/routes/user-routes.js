// imported modules
var UserModel = require('../models/user');

function userApis(api) {
    /**
     * User sign up endpoint 
     */
    api.post('/signup', function (req, res) {
        
        var user = new UserModel({
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                middleName: req.body.middleName,
                email: req.body.email,
                password: req.body.password
            });
            
        user.signup(function(err, data){
            if (err) console.error(err);
            
            return res.status(200).send(data);
        })
    });
};

// export apis
module.exports = userApis;