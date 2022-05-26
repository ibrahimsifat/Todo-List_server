const mongoose = require("mongoose");

// create schema
const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamp: true }
);
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
