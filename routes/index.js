const express = require('express');
const todosService = require('../services/todosService');
const responseHelper = require('../services/responseHandler');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const todos = await todosService.getTodos();
        if (!todos) {
            return res.status(400).json({  msg: 'No todos' });
        }
        res.json(responseHelper.apiResponse(todos));
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post('/', async (req, res) => {
    const { test } = req.body;
    try {
        const todo = await todosService.addTodo({ tets });
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.put('/', async (req, res) => {
    const { _id, test } = req.body;
    try {
        await todosService.updateTodo({ _id, test });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = (app) => {
    app.use('/api', router);
}