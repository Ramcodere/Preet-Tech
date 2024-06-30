import React, { useState } from 'react';
import '../App.css';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('All fields are required');
      return;
    }
    setLoading(true);
    Axios.post('http://localhost:3000/auth/login', {
      email,
      password,
    })
      .then((response) => {
        setLoading(false);
        if (response.data.status) {
          navigate('/home');
        } else {
          setMessage(response.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div className='sign-up-container'>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        {message && <p>{message}</p>}
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          autoComplete='off'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          placeholder='**********'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
        <p>
          Don't have an Account? <Link to='/signup'>Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
