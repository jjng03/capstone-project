require('dotenv').config()

// IMPORT DEPENDENCIES
const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const auth = require('./controllers/auth_controller');

require('./config/db.connection')

// VARIABLE FOR PORT NUMBER
const PORT = 4000;

// CREATE APP OBJECT
const app = express();

// set up middleware
app.use(cors());
app.use(express.json())


app.use('/', auth)


// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));