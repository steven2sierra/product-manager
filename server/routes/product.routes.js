
// Product Controller
const ProductController = require('../controllers/product.controller');
module.exports = function(app) {
    app.get('/api/products', ProductController.index);
    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products/:_id', ProductController.getProduct);
}