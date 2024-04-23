const express = require('express');
const bodyParser = require('bodyParser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());

//Routes

//Connect to MongoDB

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});