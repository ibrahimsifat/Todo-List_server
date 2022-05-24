//external import
const express = require("express");
const mongoose = require("mongoose");
const todosHandler = require("./routes/product");
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

//set static path
// app.use(express.static(path.join(__dirname, "public")));

//request parses
app.use(express.json());

//connection mongodb with mongoose
connectionDB();

//application route
app.use("/todo", todosHandler);

// 404 error handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

//listening app
app.listen(process.env.PORT, () => {
  console.log(`listing app to ${process.env.PORT} port`);
});
