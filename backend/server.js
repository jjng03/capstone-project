require('dotenv').config()

// IMPORT DEPENDENCIES
const express = require("express");
const cors = require("cors");
// const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');


// VARIABLE FOR PORT NUMBER
const PORT = 4000;

// CREATE APP OBJECT
const app = express();

// set up middleware
app.use(cors());
app.use(express.json())


// const posts = [
//     {
//         username: 'James',
//         title: 'Post 1'
//     },
//     {
//         username: 'Jim',
//         title: 'Post 2'
//     }
// ]

// // home route 
// app.get("/posts", authenticateToken, (req, res) => {
//     res.json(posts.filter(post => post.username === req.user.name))
// })

// app.post('/login', (req, res) => {
//     // Authenticate User

//     const username = req.body.username
//     const user = { name: username }

//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//     res.json({ accessToken: accessToken })
// })


// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user))
//     if (err) return res.sendStatus(403)
//     req.user = user
//     next()
// }


// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));