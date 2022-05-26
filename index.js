//external import
const express = require("express");
const mongoose = require("mongoose");
const todosHandler = require("./routes/todo");
const usersHandler = require("./routes/user");
const cors = require("cors");
const cookieParser = require("cookie-parser");
//internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandlar");
const connectionDB = require("./config/db");

// express app initialization
const app = express();

// dotenv config
require("dotenv").config();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

//request parses
app.use(express.json());

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));
//connection mongodb with mongoose
connectionDB();

//application route
app.use("/todo", todosHandler);
// user router
app.use("/user", usersHandler);
// 404 error handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

//listening app
app.listen(process.env.PORT, () => {
  console.log(`listing app to ${process.env.PORT} port`);
});
