import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/auth/Login/Login';
import Signup from './components/auth/Signup/Signup';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Services from './components/pages/Services/Services';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Resources from './components/pages/Resources/Resources';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App