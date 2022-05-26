const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const User = require("../../models/UserModel");

// do login
const loginController = async (req, res) => {
  try {
    // find user who has this email/ username
    const user = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.username }],
    });
    if (user && user._id) {
      console.log(user.username);
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        console.log(isValidPassword);
        // prepare the user object to generate token
        const userObject = {
          userId: user._id,
          username: user.name,
          email: user.email,
        };

        // generate token
        const token = jwt.sign(userObject, process.env.COOKIE_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        });

        // set cookie
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRY,
          httpOnly: true,
          signed: true,
        });

        res.json({
          massage: "successfully login",
        });
      } else {
        throw createError("Login failed! Please try again.");
      }
    } else {
      throw createError("Login failed! Please try again.");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = loginController;
