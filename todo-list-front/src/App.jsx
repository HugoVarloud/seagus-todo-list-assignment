import './App.css'
import NavigationDrawer from './component/NavigationDrawer';
import Todo from './views/Todo';
import LoginForm from './views/Login';
import Register from './views/Register';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationDrawer />
        <Routes>
          <Route path="/" exact element={<Todo/>}></Route>
          <Route path="/login" element={<LoginForm/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
