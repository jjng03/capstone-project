// IMPORT DEPENDENCIES
const express = require("express");
const cors = require("cors");

// VARIABLE FOR PORT NUMBER
const PORT = process.env.PORT || 4000;

// CREATE APP OBJECT
const app = express();

// set up middleware
app.use(cors());

// home route 
app.get("/", (req, res) => {
    res.send("Hello World!");
})

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));