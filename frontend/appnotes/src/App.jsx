import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro'


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  </Router>
  )
}

export default App
