const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
        title: { 
            type: String,
            required: true,
            unique: true
        },
        genre: {
            type: String
        },
        content: { 
            type: Array
        }
}, { timestamps: true })

module.exports = mongoose.model('Favorite', favoriteSchema);