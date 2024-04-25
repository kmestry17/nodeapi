const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());

//Routes
app.use('/todos', todoRoutes);

//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/tododatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});