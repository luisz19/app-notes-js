import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro'
import Home from './pages/Home'
import Search from './pages/Search';


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path='/notes' element={<Home />} />
      {/* <Route path='/notes/search' element={<Search />} /> */}
    </Routes>
  </Router>
  )
}

export default App
