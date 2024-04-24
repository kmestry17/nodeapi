const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Create a new todo
router.post('/', async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.send(400).send(error);
    }
});

// Get all todos
router.get('/', async (req, res) => {
    try {
        const todo = await Todo.find();
        res.send(todos)
    } catch (error) {
        res.status(500).send(error);
    }
})