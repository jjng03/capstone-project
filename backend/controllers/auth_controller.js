const express = require('express');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../models/User');

// CREATE USER ROUTE
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        // encrypting req.body.password into a secret key
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    
    try {
    const user = await newUser.save();
    res.json(user);
    } catch(err){
        res.status(500).json(err);
    }
})

// LOGIN ROUTE
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(404).json("Wrong password or username!")
        
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        // comparing the hashed user password and the secret key
        originalPassword !== req.body.password && 
            res.status(404).json("Wrong password or username!");
            // creating a new token for the user
            const accessToken = jwt.sign({ id: user._id }, 
                process.env.SECRET_KEY,
                { expiresIn: "5d" });
        // Holds the password and only sends other information from user documents
        const { password, ...info } = user._doc;
        // if password and secret key are equal then send user info
        res.status(200).json({ ...info, accessToken });
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;