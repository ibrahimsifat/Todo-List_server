// external import
const router = require("express").Router();
// internal import
const {
  addUserDB,
  getProductDB,
  updateAPeople,
  addManyProductsDB,
  getProductByIdDB,
  deleteOneDB,
  deleteMany,
} = require("../controllers/Products/productController");

// routers
router.get("/", getProductDB);

// find by id
router.get("/:id", getProductByIdDB);

router.post("/", addUserDB);
router.post("/all", addManyProductsDB);

// update a user
router.put("/:id", updateAPeople);

// delete a user
router.delete("/:id", deleteOneDB);

// delete many
router.delete("/all", deleteMany);

module.exports = router;
