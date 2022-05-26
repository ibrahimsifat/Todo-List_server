// external import
const mongoose = require("mongoose");
const Product = require("../../models/product");
// router controller
const getProductDB = async (req, res) => {
  // const products = await Product.find({ category: "women-fashion" }).exec();
  const products = await Product.find({}).exec();
  res.json(products);
};

const addUserDB = (req, res) => {
  const userObject = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  };
  const newProduct = new Product(userObject);
  newProduct.save((err) => {
    if (err) {
      res.status(500).json({
        error: err.massage,
      });
    } else {
      res.status(200).json({
        massage: "successfully added the user",
      });
    }
  });
};

const getProductByIdDB = async (req, res) => {
  const id = req.params.id;
  const user = await Product.findById(id);
  console.log(id);
  res.json(user);
};
/// add many products addManyProductsDB

const addManyProductsDB = (req, res) => {
  Product.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: err.massage,
      });
    } else {
      res.status(200).json({
        massage: "successfully added the users",
      });
    }
  });
};

const updateAPeople = async (req, res) => {
  try {
    const userId = req.params.id;
    const filter = { _id: userId };
    const update = {
      title: "updatedTitle",
      description: "this is updated description",
    };
    let result = await Product.findOneAndUpdate(filter, update);
    result = await Product.find(filter);
    console.log(result);
    res.send(result);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

const deleteOneDB = async (req, res) => {
  const userId = req.params.id;
  const product = await Product.findByIdAndRemove(userId);
  res.send(product);
};

const deleteMany = async (req, res) => {
  Product.deleteMany({ category: { $in: "men-fashion" } })
    .then(function () {
      console.log("Data deleted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
};
module.exports = {
  deleteOneDB,
  updateAPeople,
  addUserDB,
  getProductDB,
  addManyProductsDB,
  getProductByIdDB,
  deleteMany,
};
