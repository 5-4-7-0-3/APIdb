const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ordersSchema = new Schema({
    orders_date: {
        type: Date,
        default: Date.now
    },

    user_id: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
    
})
module.exports = mongoose.model('orders', ordersSchema);