import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    amount_left: {
        type: Number,
        required: true,
    },

    category_id: {
        ref: "category",
        type: Schema.Types.ObjectId,
    },
    image: {
        type: String,
        required: false,
    },
});

const Product = mongoose.model("products", productSchema);

export { Product };
