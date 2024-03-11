import React from "react";
import { Box, Button, TextField, Grid, List, ListItem, IconButton, Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState();

    const handleDeleteTask = (id) => {
      axios.delete('http://localhost:3000/todos/'+id)
      .then(result => console.log(result))
      .catch(error => console.log(error));
    }
  
    const handleAddTask = () => {
        axios.post('http://localhost:3000/todos', {task})
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

    const handleTaskChange = (event) => {
        setTask(event.target.value);
    }

    useEffect(() => {
        axios.get('http://localhost:3000/todos')
        .then(result => setTodos(result.data))
        .catch(error => console.log(error));
    })
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={"100px"}
            >
                <TextField id="outlined-basic" label="Ma tache ici..." variant="outlined" onChange={handleTaskChange} />
                <Button variant="outlined" onClick={handleAddTask}>Ajouter</Button>
            </Box>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            {
            todos.length === 0
            ?
            <div><h2>Pas de tache pour le moment</h2></div>
            :
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo =>
                <ListItem 
                    key={todo._id}
                    secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(todo._id)}>
                        <DeleteIcon />
                    </IconButton>
                    }
                >
                    <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={todo.task} secondary="Jan 9, 2014" />

                </ListItem>
                )}
            </List>
            } 
        </Grid>
        </>
    )
};
