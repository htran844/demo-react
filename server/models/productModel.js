const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    code: String,
    price: String,
    images: Array,
    color: Array,
    size: Array,
    slug: String,
  },
  {
    collection: "products",
  }
);
const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;
