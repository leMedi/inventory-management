var express = require('express');
var app = express();
var productRouter = express.Router();

// Require Item model in our routes module
var Product = require('../models/Product');

// Defined store route
productRouter.route('/add/post').post(function (req, res) {
  var product = new Product(req.body);
      product.save()
    .then(product => {
    res.json('Product added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
productRouter.route('/').get(function (req, res) {
  product.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});

// Defined edit route
productRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  product.findById(id, function (err, product){
      res.json(product);
  });
});

//  Defined update route
productRouter.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (!product)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      product.product = req.body.product;

      product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
productRouter.route('/delete/:id').get(function (req, res) {
  Product.findByIdAndRemove({_id: req.params.id},
       function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRouter;