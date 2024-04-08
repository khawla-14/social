import React from 'react'
import { Link } from 'react-router-dom';
import "./signup.css"

const Signup = () => {
    return (
        <div className='signup'>
            <h1>Log in</h1>
            <p>
                Already a member?
                <Link to="/login">  Log in</Link>
            </p>

            <form>
                <label>Name</label>
                <input type="text" name='username' />
                <label>Email</label>
                <input type="email" name='signupEmail' />
                <label>Password</label>
                <input type="password" name='signupPassword' />
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default Signup
