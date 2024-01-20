import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import CreatingUser from './pages/CreatingUser';



function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/creatinguser" element={<CreatingUser />} />



  </Routes>
  </>
  );
}

export default App;
