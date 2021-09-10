import mongoose from 'mongoose';
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    login: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }


})

const User = mongoose.model('users', userSchema);
export {User}
