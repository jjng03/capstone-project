const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const verify = require('../verifyToken');
// UPDATE

router.put('/:id', verify, async (req, res) => {
    if(req.user.id === req.params.id){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }

        try{
            // update user information and set it to the existing req.body
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
                {$set: req.body}, 
                { new: true });

            res.status(200).json(updatedUser);
        }catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("You can update your account only!")
    }
})
// DELETE

// GET

// GET ALL 

module.exports = router;