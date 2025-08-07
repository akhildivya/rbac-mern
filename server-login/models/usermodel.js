const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user","customer"]
    },

}, {
    timestamps: true,
})

const Usermodel = mongoose.model("users", userSchema)
module.exports = Usermodel