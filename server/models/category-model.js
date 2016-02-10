// imported modules
var mongoose = require('mongoose');
var passwordHash = require('password-hash');

var categoryModel = (function () {
    /**
     * Model Schema
     */
    var Category = new mongoose.Schema({
        name: { type: String, required: true, index: { unique: true } },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    });
    
    /**
     * Create category
     */
    Category.methods.create = function(callback) {
        this.save(function(err) {
            return callback(err);
        });
    };
    
    return Category;
})();

// export model
module.exports = mongoose.model('Category', categoryModel);