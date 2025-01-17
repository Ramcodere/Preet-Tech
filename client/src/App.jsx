
// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        {/* <Route path='/' element={<h1>hello</h1>}></Route> */}
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route> 
        <Route path='/home' element={<Home />}></Route> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;

    





