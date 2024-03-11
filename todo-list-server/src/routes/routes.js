const router = require('express').Router();
const Todo = require('../Models/Todo');

router.get('/todos', async (request, response) => {
    const todosList = await Todo.find();
    response.send(todosList);
})

module.exports = router;
