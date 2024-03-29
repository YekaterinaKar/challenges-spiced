import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    product: { type: String, required: true },
});

const Product = mongoose.models.Joke || mongoose.model("Product", productSchema);

export default Product;