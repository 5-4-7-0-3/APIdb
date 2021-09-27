import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

const ProductCategory = mongoose.model("category", productCategorySchema);

export { ProductCategory };
