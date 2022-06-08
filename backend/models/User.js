const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Enter username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Enter email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Enter password']
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User;