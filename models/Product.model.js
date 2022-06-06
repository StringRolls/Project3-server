const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true
  },
  productImg: {
    type: String,
    required: true,
  },
  cuisineType: {
    type: String,
    required: true,
    enum: [
      "Pizza",
      "Sushi",
      "Thai",
      "Chinese",
      "Ramen",
      "Soup",
      "Italian",
      "Vegan",
      "Healthy",
      "Indian",
      "Burgers",
      "Breakfast",
      "Salad",
      "Mexican",
      "Vegetarian",
      "Sandwiches",
      "Mediterranean",
      "Korean",
    ],
  },
  productPrice: {
    type: String,
    required: true,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
