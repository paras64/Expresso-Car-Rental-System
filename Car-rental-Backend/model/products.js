const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, min: [0, "Invaild Price"], required: true },
  category: { type: String, default: "Regular cars" },
  model: { type: String, required: true, unique: true },
  capacity: { type: Number, required: true },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong min discountPercentage"],
    max: [20, "Wrong max discountPercentage"],
    default: 0,
  },
  rating: {
    type: Number,
    min: [0, "Wrong min rating"],
    max: [5, "Wrong max rating"],
    default: 2,
  },
  brand: { type: String, required: true },
  thumbnail: { type: String, required: true },
  weight: { type: String, default: "200+" },
  speed: { type: String, required: true },
  color: { type: String, required: true },
  mileage: { type: String, required: true },
  available: { type: String, required: true },
  drive: { type: String, required: true },
  stocks: {
    type: Number,
    min: [0, "Wrong min stocks"],
  },
  images: [String],
});

const Product = new mongoose.model("product", ProductSchema);
exports.Product = Product;
