import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import './header.css'

const Header = () => {
  return (
    <nav>
      <h1>
        <Link to="/">ZK</Link>
      </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button>
        <FaRegUser />
        <Link to="/login">Log in</Link>
      </button>
    </nav>
  )
}

export default Header
