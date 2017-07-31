var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Product = new Schema({
    title: String,
    description: String,
    price: String
},{
    collection: 'product'
});

module.exports = mongoose.model('Product', Product);