import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        required: true,
    },
});

const Token = mongoose.model("token", tokenSchema);
export { Token };
