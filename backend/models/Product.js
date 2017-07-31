var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  item: {
    type: String
  },

},{
    collection: 'product'
});

module.exports = mongoose.model('Product', Item);