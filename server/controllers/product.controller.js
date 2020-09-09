const { Product } = require('../models/product.model');

// index for Main
module.exports.index = (req,res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "Something went wrong...", error: err}));
}

// create a product
module.exports.createProduct = (req,res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

// get product by id
module.exports.getProduct = (req,res) => {
    Product.findOne({_id:req.params._id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}