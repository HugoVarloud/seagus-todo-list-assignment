import { useState } from 'react'
import './App.css'
import Todo from './component/Todo'
import { useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [todos, setTodos] = useState([]);

  const handleDeleteTask = (id) => {
    axios.delete('http://localhost:3000/todos/'+id)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }

  useEffect(() => {
    axios.get('http://localhost:3000/todos')
    .then(result => setTodos(result.data))
    .catch(error => console.log(error));
  })
  return (
    <>
      <Todo />
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
}

export default App;
