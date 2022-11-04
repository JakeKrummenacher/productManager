const { response } = require('express');
const Product = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}

module.exports.findAllProducts = (request, response) => {
    Product.find({})
        .then((allProducts) => {
            response.json({products: allProducts})
        })
        .catch((err) => {
            response.json({message: "Something went wrong", error: err})
        })
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({_id: req.params.id })
        .then( oneSingleProduct => {
            res.json({product: oneSingleProduct})
        })
        .catch((err) => {
            response.json({message: "Something went wrong", error: err})
        })
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}


module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true}
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
}