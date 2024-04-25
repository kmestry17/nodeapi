const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Create a new todo list or add todos to an existing list
router.post('/', async (req, res) => {
    try {
        const todos = req.body.todos; // Extract the array of todos from the request body
        const createdTodos = await Todo.insertMany(todos.map(todo => ({ todos: [todo] }))); // Create multiple todos
        console.log('Created todos:', createdTodos);
        res.status(201).send(createdTodos);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all todo lists
router.get('/', async (req, res) => {
    try {
        const todoLists = await Todo.find();
        res.send(todoLists);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a single todo list
router.get('/:id', async (req, res) => {
    try {
        const todoList = await Todo.findById(req.params.id);
        if (!todoList) {
            return res.status(404).send();
        }
        res.send(todoList);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a todo list
router.patch('/:id', async (req, res) => {
    try {
        const updatedTodos = req.body.todos; // Extract the array of updated todos from the request body

        const todoList = await Todo.findByIdAndUpdate(
            req.params.id,
            { $push: { todos: { $each: updatedTodos } } },
            { new: true }
        );

        if (!todoList) {
            return res.status(404).send();
        }

        res.send(todoList);
    } catch (error) {
        res.status(400).send();
    }
});

// Delete a todo list
router.delete('/:id', async (req, res) => {
    try {
        const todoList = await Todo.findByIdAndDelete(req.params.id);
        if (!todoList) {
            return res.status(404).send();
        }
        res.send(todoList);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;