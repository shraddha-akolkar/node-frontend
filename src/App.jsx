import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Header from './components/Header'
const App = () => {
  return (
    <>
      
      <Router>
  <Header />

  <div style={{ marginTop: "80px" }}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="addtodo" element={<AddTodo />} />
      <Route path="todos" element={<Todos />} />
    </Routes>
  </div>
</Router>




    </>
  )
}

export default App
