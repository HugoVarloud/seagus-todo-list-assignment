import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function Todo() {
  const [task, setTask] = useState();
  const handleAddTask = () => {
    axios.post('http://localhost:3000/add', {task})
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  }
  return (
    <>
        <p>To do list: </p>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <TextField id="outlined-basic" label="Ma tache ici..." variant="outlined" onChange={handleTaskChange} />
            <Button variant="outlined" onClick={handleAddTask}>Ajouter</Button>
        </Box>
    </>
  )
}

