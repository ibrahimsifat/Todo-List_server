const router = require("express").Router();
const { addUserDB } = require("../controllers/Products/productController");
const Product = require("../models/product");
router.get("/", (req, res) => {
  res.send("hello todos");
});
router.post("/", addUserDB);
module.exports = router;
