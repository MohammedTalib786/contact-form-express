const mongoose = require('mongoose')

const schema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 6
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 8
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = new mongoose.model("User", schema);
module.exports = User;

