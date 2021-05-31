const fs = require('fs')
const pump = require('pump')



let products = require('../controller/product');

async function routes (fastify, options) {
    fastify.get('/products', products.getProductsList);
    fastify.get('/products/:id', products.getProductDetail);
    fastify.post('/products', products.addProduct);
    fastify.get('/products/location/:location', products.getProductByLocation);
    fastify.put('/products', products.updateProduct);
    fastify.delete('/products/:id', products.deleteProduct)
}

module.exports = routes;