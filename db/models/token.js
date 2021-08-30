const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('token', tokenSchema);