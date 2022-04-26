const db = require("../models");
const Products = db.products;

// Create and Save a new Product
exports.create=(req,res)=>{
    //Validate request
    if (!req.body.title) {
        res.status(400).send({message:"Product can not be empty!"});
        return;
    }
    // Create a product
    const product = new Products({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        published: req.body.published ? req.body.published : false
    });
    // Save product in the database
    product
        .save(product)
        .then(data=>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating new product."
            });
        });
};

// Retrieve all products from the database
exports.findAll = (req,res) =>{
    const title = req.query.title;
    var condition = title ? {title: {$regex: new RegExp(title), $options: "i"}} :{};
    Products.find(condition)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving products"
            });
        });
};

// Find a single product with an id
exports.findOne=(req,res)=>{
    const id = req.params.id;
    Products.findById(id)
        .then(data =>{
            if(!data)
                res.status(404).send({message: "Product doesn't exist with id" + id});
            else res.send(data);
        })
        .catch(err =>{
            res
               .status(500)
               .send({message:"Error retrieving product with id=" +id});
        });
};

//Update a product by the id in the request
exports.update = (req,res) =>{
    if(!req.body){
        return res.status(400).send({
            message:"Data to update can't be empty!"
        });
    }
    const id = req.params.id;
    Products.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
        .then(data=>{
            if(!data){
                res.status(404).send({
                    message:`Cannot update product with id =${id}. Maybe product was not found!`
                });
            } else res.send({message: "Product was updated successfully."});
        })
        .catch(err=>{
            res.status(500).send({
                message: "Error updating product with id=" +id
            });
        });
};

// Delete a product with the specified id in the request
exports.delete = (req,res) =>{
    const id = req.params.id;
    Products.findByIdAndRemove(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot delete product with id=${id}. Product was not found!`});
            } else{
                res.send({
                    message: "Product was deleted successfully!"
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:"Couldn't delete product with id=" +id
            });
        });
};

// Delete all products from the database -For testing and development-
exports.deleteAll = (req,res) =>{
    Products.deleteMany({})
        .then(data=>{
            res.send({
                message: `${data.deletedCount} Products are deleted successfully!`
            });
        })
        .catch(err=>{
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all products."
            });
        });
};

// Published Products
exports.findAllPublished = (req,res) =>{
    Products.find({published:true})
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving products."
            });
        });
};