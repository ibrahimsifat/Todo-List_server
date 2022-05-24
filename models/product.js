const mongoose = require("mongoose");

// create schema
const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
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
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
