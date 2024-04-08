import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'

import { assets } from '../../assets/assets';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";import { FaChevronUp } from "react-icons/fa";



const Footer = () => {
  const style = { color: "white", fontSize: "30px", margin: "0 10px" }
  return (
    <div>
      <footer>
        <div className='top'>
          <div className='newsletter'>
            <h3>Stay Up To Date</h3>
            <h2>Join The Newsletter</h2>
            <div>
              <input type="email" name='newsletter-email' placeholder='E-mail' />
              <button>Subscribe</button>
            </div>
          </div>
          <button className='back-top'><FaChevronUp /></button>

          {/* <img src={assets.logo} alt="Logo" /> */}

          <div className='links'>
            <h2>The Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

          </div>
        </div>

        <div className='bottom'>
          <div className='socials'>
            <FaInstagram style={style} />
            <FaTwitter style={style} />
            <FaPinterest style={style} />
          </div>

          <hr />
          <div className='copyright'>COPYRIGHT © 2023 ·  khawla.info</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
