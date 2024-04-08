import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
  return (
    <div className='login'>
      <h1>Log in</h1>
      <p>
        New to this site?
        <Link to="/signup">  Signup</Link>
      </p>

      <form>
        <label>Email</label>
        <input type="email" name='loginEmail' />
        <label>Password</label>
        <input type="password" name='loginPassword' />
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default Login
