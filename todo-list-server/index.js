const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./src/Models/Todo')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:azertyuiop@cluster0.xbkvtug.mongodb.net/");

app.get('/get', (request, response) => {
    TodoModel.find()
    .then(result => response.json(result))
    .catch(error => console.log(error))
})

app.post('/add', (request, response) => {
    const { task } = request.body;
    TodoModel.create({
        task
    })
    .then(result => {
        response.json(result)
    })
    .catch(error => console.log(error));
});

app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;

    TodoModel.deleteOne({
        _id: id
    })
    .then(result => {
        response.json(result)
    })
    .catch(error => console.log(error));
});

app.listen(3000, () => {
    console.log("Server is Running");
})