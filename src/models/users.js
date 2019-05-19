const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        tolowercase: true,
    },
    password: {
        type: String
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User;