const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salesSchema = new Schema({
    product_id: {
        ref: 'products',
        type: Schema.Types.ObjectId
    },

    order_id: {
        ref: 'orders',
        type: Schema.Types.ObjectId
    },
    
    quantity: {
        type: Number,
        required: true
    }


})

module.exports = mongoose.model('sales', salesSchema);