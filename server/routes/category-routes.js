// imported modules
var CategoryModel = require('../models/category-model');

/**
 * Categories REST Api's
 */
function categoryApis(api) {
    /**
     * Create category endpoint 
     */
    api.post('/category', function (req, res) {
        var data = req.body;

        var category = new CategoryModel({
            name: data.name
        });
        
        category.create(function(err) {
            if (!err) {
                return res.send({ success: true});
            }
            
            return res.send({success: false, error: err});
        });

    });
};

// export apis
module.exports = categoryApis;