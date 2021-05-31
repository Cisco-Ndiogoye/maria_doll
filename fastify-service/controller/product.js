const fs = require('fs')
const pump = require('pump')


const productsModel = require('../models/productsModel.js')

async function getProductsList (request, response) {
    var limit   = 20;
    var offset  = 0;
    var page    = 1;
    
    if (typeof request.query.limit !== "undefined") {
      if (parseInt(request.query.limit) > 0) {
        limit = parseInt(request.query.limit);
      }
    }

    if (typeof request.query.page !== "undefined") {
      if (parseInt(request.query.page) > 0) {
        page = parseInt(request.query.page);
        offset = (page-1)*limit
      }
    }

    var queryParams = { offset: offset, limit: limit }
    const productsData = await productsModel.productsList(queryParams);

    var resp = {page: page, per_page: limit, data:productsData}
    if (productsData.length > 0) {
        return response.status(200).send(resp);
    } else {
        return response.status(500).send({ error: "Error getting products."});
    }
}

async function getProductDetail (request, response) {
    const productData = await productsModel.productDetail(request.params.id);
    if (productData.length > 0) {
        return response.status(200).send(productData[0]);
    } else {
        return response.status(500).send({ error: "Product with id: " + request.params.id + " not found."});
    }
}

async function getProductByLocation (request, response) {
    var limit   = 20;
    var offset  = 0;
    var page    = 1;
    
    if (typeof request.query.limit !== "undefined") {
      if (parseInt(request.query.limit) > 0) {
        limit = parseInt(request.query.limit);
      }
    }

    if (typeof request.query.page !== "undefined") {
      if (parseInt(request.query.page) > 0) {
        page = parseInt(request.query.page);
        offset = (page-1)*limit
      }
    }

    var queryParams = { offset: offset, limit: limit }
    const productData = await productsModel.productByLocation(request.params.location, queryParams)
    var resp = {page: page, per_page: limit, data:productData}
    if (productData.length > 0) {
        return response.status(200).send(resp);
    } else {
        return response.status(500).send({ error: "Error getting products."});
    }
}

async function addProduct (request, response) {
    const productData = await productsModel.saveProduct(request.body);
    if (productData.length > 0) {
        return response.status(201).send(productData[0]);
    } else {
        return response.status(500).send({ error: "Error creating product."});
    }
}

async function updateProduct (request, response) {
    const productData = await productsModel.updateProduct(request.body);
    if (productData.length > 0) {
        return response.status(200).send(productData[0]);
    } else {
        return response.status(500).send({ error: "Error modifying product."});
    }
}

async function deleteProduct (request, response) {
    const productData = await productsModel.deleteProduct(request.params.id);
    if (productData.length > 0) {
        return response.status(200).send({msg: productData});
    } else {
        return response.status(500).send({ error: "Error deleting product."});
    }
}

module.exports = {
    getProductsList,
    getProductDetail,
    getProductByLocation,
    addProduct,
    updateProduct,
    deleteProduct
};