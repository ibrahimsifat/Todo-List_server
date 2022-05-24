const mongoose = require("mongoose");

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
module.exports = {
  addUserDB,
};
