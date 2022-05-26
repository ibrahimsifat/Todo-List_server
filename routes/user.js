const { addUserDB, getUserDB } = require("../controllers/todos/userController");
const loginController = require("../controllers/todos/loginController");
// external import
const router = require("express").Router();
// internal import

router.get("/", getUserDB);
router.post("/", addUserDB);
router.post("/login", loginController);

module.exports = router;
