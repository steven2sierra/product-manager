const { Product } = require('../models/product.model');

// index for placement purposes
module.exports.index = (req,res) => {
    Product.find()
        .then(allProducts => res.json({product: allProducts}))
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
        .then(product => res.json(product))
        .catch(err => res.json(err));
}