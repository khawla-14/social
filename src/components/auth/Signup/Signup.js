import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./signup.css"

const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock user registration logic (replace this with actual backend logic later)
        // Here, you can simply log the entered user details
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // Clear the form fields
        setUsername('');
        setEmail('');
        setPassword('');

        // Display a success message or redirect to a new page upon successful signup
        console.log('Signup successful!');
    };

    return (
        <div className='signup'>
            <h1>Sign up</h1>
            <p>
                Already a member?
                <Link to="/login">  Log in</Link>
            </p>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                <label>Email</label>
                <input type="email" name='signupEmail' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password</label>
                <input type="password" name='signupPassword' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type='submit'>Signup</button>
            </form>

        </div>
    )
}

export default Signup
