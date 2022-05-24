const mongoose = require("mongoose");

const connectionDB = () => {
  //connection mongodb with mongoose
  return mongoose
    .connect(process.env.MONGODB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectionDB;
