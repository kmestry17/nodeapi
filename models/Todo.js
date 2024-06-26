const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todos: [{
        title: {
            type: String,
            required: true
        },
        description: String,
        completed: {
            type: Boolean,
            default: false
        }
    }]
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;