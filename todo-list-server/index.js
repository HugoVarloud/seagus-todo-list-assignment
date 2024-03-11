const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./src/Models/Todo');
const User = require('./src/Models/User');
const Todo = require('./src/Models/Todo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const app = express();
app.use(cors(
));
app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://admin:azertyuiop@cluster0.xbkvtug.mongodb.net/");

app.get('/todos', (request, response) => {
    TodoModel.find()
    .then(result => response.json(result))
    .catch(error => console.log(error));
})

app.post('/todos', (request, response) => {
    const { task } = request.body;
    TodoModel.create({
        task
    })
    .then(result => {
        response.json(result)
    })
    .catch(error => console.log(error));
});

app.delete('/todos/:id', (request, response) => {
    const { id } = request.params;

    TodoModel.deleteOne({
        _id: id
    })
    .then(result => {
        response.json(result)
    })
    .catch(error => console.log(error));
});

app.post('/register', async (request, response) => {
    const { username, password } = request.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        username,
        password: hashedPassword
    })
    response.status(200).send(`${user.username} has been created successfully`);
});

app.post('/login', async (request, response) => {
    const { username, password } = request.body;

    const user = await User.findOne({
        username
    });

    if (!user) {
        response.status(404).send({
            message: "user not found"
        });
    }
    if(!await bcrypt.compare(password, user.password)) {
        response.status(404).send({
            message: "invalid password"
        });
    }
    // TODO : UPATE SECRET KEY AND PUT IT IN DOT ENV
    const token = jwt.sign({_id: user.id}, "secret");
    response.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24*60*60*1000 // 1 day
    })
    response.status(200).send({
        message: 'Success'
    });
});

app.get('/user', async (request, response) => {
    try {
        const cookie = request?.cookies['jwt'];
        // TODO : UPATE SECRET KEY AND PUT IT IN DOT ENV
        const claims = jwt.verify(cookie, 'secret')
    
        if (!claims) {
            return response.status(401).send({
                message: 'Unauthenticated'
            });
        }
        const user = await User.findOne({_id: claims._id});
        const {password, ...data} = await user.toJSON();
    
        response.send(data);
    } catch (error) {
        return response.status(401).send({
            message: 'Unauthenticated'
        });
    }
})


app.post('/logout', async (request, response) => {
    response.cookie('jwt', '', {maxAge: 0});
    response.send({
        message: 'Success'
    });
})

app.get('/todos', async (request, response) => {
    const todosList = await Todo.find();
    response.send(todosList);
})

app.listen(3000, () => {
    console.log("Server is Running");
})