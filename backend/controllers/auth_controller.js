const express = require('express');
const CryptoJS = require('crypto-js');

const router = express.Router();
const User = require('../models/User');

// REGISTER ROUTE
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    
    try {
    const user = await newUser.save();
    res.json(user);
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;