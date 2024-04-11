import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import './login.css'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock user credentials (replace this with actual backend logic later)
    const mockUser = {
      email: 'example@gmail.com',
      password: '1234',
    };

    // Check if the entered credentials match the mock user
    if (email === mockUser.email && password === mockUser.password) {
      // Clear any previous error messages
      setError('');

      // Redirect to a new page or perform any other action upon successful login
      console.log('Login successful!');
    } else {
      // Display an error message if the credentials are incorrect
      setError('Invalid email or password');
    }
  };

  return (
    <div className='login'>
      <h1>Log in</h1>
      <p>
        New to this site?
        <Link to="/signup">  Signup</Link>
      </p>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name='loginEmail' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" name='loginPassword' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default Login

//



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       // Handle successful login (e.g., store token, redirect to dashboard)
//     } catch (error) {
//       console.error(error);
//       setError('Invalid email or password');
//       // Handle login error (e.g., display error message)
//     }
//   };