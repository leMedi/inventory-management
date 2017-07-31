var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var productRouter = express.Router();

app.use(bodyParser.urlencoded({
  extended: true
}));

// Require Item model in our routes module
var Product = require('../models/Product');

// Defined store route
productRouter.route('/add/post').post(function (req, res) {
    console.log(req.body);
  var product = new Product(req.body);
//   product.title = req.body.title;
//   product.description = req.body.description;
//   product.price = req.body.price;
  console.log(product);
      product.save()
    .then(product => {
        res.json('Product added successfully');
        console.log('Product added successfully');
        console.log(product);
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
        console.log('unable to save to databasey');
    });
});

// Defined get data(index or listing) route
productRouter.route('/').get(function (req, res) {
  Product.find(function (err, itms){
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
  Product.findById(id, function (err, product){
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
      console.log(req.body);
      product.title = req.body.title;
      product.description = req.body.description;
      product.price = req.body.price;

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