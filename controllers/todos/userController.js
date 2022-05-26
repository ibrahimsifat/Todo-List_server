const User = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const getUserDB = (_req, res) => {
  res.send("this is user");
};
const addUserDB = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const userObject = {
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  };
  const newTodo = new User(userObject);
  newTodo.save((err) => {
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
module.exports = { addUserDB, getUserDB };
