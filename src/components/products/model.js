import { Schema, model } from "mongoose";

//!! python => js
//* from mongoose import Schema; => import { Schema } from "mongoose";
//* import mongoose => import mongoose from "mongoose"

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
});

const productModel = model("products", productSchema);

export default productModel;
