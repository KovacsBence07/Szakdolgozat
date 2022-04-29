const { products } = require("../models");

module.exports = app =>{
    const Products = require("../controllers/products.controller");
    var router = require("express").Router();
    //Create new product
    router.post("/", Products.create);
    // Retrieve all products
    router.get("/", Products.findAll);
    //Retrieve a single product with id
    router.get("/:id", Products.findOne);
    //update a product with id
    router.put("/:id", Products.update);
    //Delete a product with id
    router.delete("/:id", Products.delete);
    //Delete all products
    router.delete("/", Products.deleteAll);
    app.use('/api/products',router);
};