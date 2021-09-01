const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    amount_left: {
        type: Number,
        required: true
    },

    category_id: {
        ref: 'category',
        type: Schema.Types.ObjectId
    },


})
module.exports = mongoose.model('products', productSchema);
