// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../App.css';


const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Axios.post('http://localhost:3000/auth/logout')
      .then(() => {
        navigate('/login');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='home-container'>
      <h1>Welcome to Preet Tech</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
