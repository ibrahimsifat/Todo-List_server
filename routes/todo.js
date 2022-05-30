// external import
const router = require("express").Router();
// internal import
const {
  addTodoDB,
  getTodoDB,
  updateATodo,
  addManyTodoDB,
  getTodoByIdDB,
  deleteOneDB,
  deleteMany,
} = require("../controllers/todos/todoController");
const { checkLogin } = require("../middlewares/common/checkLogin");

// routers
// router.get("/", (req, res) => {
//   res.send("this is home");
// });
router.get("/", getTodoDB);

// find by id
router.get("/:id", getTodoByIdDB);

router.post("/", addTodoDB);
router.post("/all", addManyTodoDB);

// update a user
router.put("/:id", updateATodo);

// delete a user
router.delete("/:id", deleteOneDB);

// delete many
router.delete("/all", deleteMany);

module.exports = router;
