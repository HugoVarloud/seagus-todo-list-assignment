const router = require('express').Router();
const Todo = require('../Models/Todo');

router.get('/todos', (request, response) => {
    Todo.find()
    .then(result => response.json(result))
    .catch(error => console.log(error))
})

module.exports = router;
