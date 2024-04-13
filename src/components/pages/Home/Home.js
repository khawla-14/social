import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom';
import img_1 from '../../../assets/img_1.jpg';
import img_2 from '../../../assets/img_2.png';
import img_3 from '../../../assets/img_3.png';

const Home = () => {
  return (
    <div>
      <div className='hero_section'>
        <div className='text_box'>
          <span>Oh Hey</span>
          <h1>Where Creativity Meets Technology</h1>
          <p>
            With a passion for design and a strong focus on creativity and functionality, I am dedicated to helping businesses like yours create a strong online presence. Whether you need a new logo, marketing materials, or a website that effectively showcases your products and services, I have the skills and expertise to turn your vision into reality.
          </p>
          <button className='secondary_btn'><Link to='/services'>Find your Design with me</Link></button>
        </div>
        <div className='img'>
          <img src={img_1} alt="Image 1" />
        </div>
      </div>

      <div className='so_'>
        <span>So..</span>
        <h1>Ready to Make It To The Next <br /> Level?</h1>
        <p>I make website design and development simple, by bringing compassion, creativity <br /> and collaboration into every stage of the process.</p>

        <button className='secondary_btn'><Link to="/services">Work with me</Link></button>
      </div>

      <section className='services'>
        <span>My Services</span>
        <h1>Not sure where to begin? Take a look <br /> around. There’s a solution for you.</h1>


        <div className='services_card'>
          <div className='img'>
            <img src={img_2} alt="service" />
          </div>
          <div className='details'>
            <span>01</span>
            <h2>Graphic Designer</h2>
            <p>is more than just putting images and text <br /> together. It's about telling a story, creating an <br /> identity and making a lasting impression.</p>
            <button className='secondary_btn'><Link to="/services">View more</Link></button>
          </div>
        </div>


        <div className='services_card child_2'>
          <div className='details'>
            <span>02</span>
            <h2>Brand Design</h2>
            <p>is more than just putting images and text <br /> together. It's about telling a story, creating an <br /> identity and making a lasting impression.</p>
            <button className='secondary_btn'><Link to="/services">View more</Link></button>
          </div>

          <div className='img'>
            <img src={img_2} alt="service" />
          </div>
        </div>


        <div className='services_card'>
          <div className='img'>
            <img src={img_2} alt="service" />
          </div>
          <div className='details'>
            <span>03</span>
            <h2>Web Design</h2>
            <p>is more than just putting images and text <br /> together. It's about telling a story, creating an <br /> identity and making a lasting impression.</p>
            <button className='secondary_btn'><Link to="/services">View more</Link></button>
          </div>
        </div>
      </section>


      <section className='meet'>
        <div className='img'>
          <img src={img_3} alt="meet khawla" />
        </div>
        <div className='text'>
          <span>Meet Khawla,</span>
          <h2>Creative Brand Designer & <br /> Developer</h2>
          <p>
            your dedicated graphic designer and web developer. With 4+ years of experience in the industry, I have honed my skills and developed a keen eye for detail. My goal is to help businesses like yours stand out from the crowd with custom designs that reflect your unique personality and style.
          </p>
          <i>
            "I believe that design has the power to tell a story, create a memorable first impression, and drive meaningful results."
          </i>

          <button className='secondary_btn'><Link to="/about">More about me</Link></button>
        </div>
      </section>

      <section className='free_takes'>


        <div className='card'>
          <div className='details'>
            <span>Free Take</span>
            <h2>Free Downloads & Tutorials</h2>
            <p>I believe in giving back to the design community. That's why I've created a collection of free resources to help you elevate your brand and improve your skills.</p>
            <button className='secondary_btn'><Link to="/resources">Take a look</Link></button>
          </div>

          <div className='img'>
            <img src={img_2} alt="resources" />
          </div>
        </div>



      </section>

    </div>


  )
}

export default Home
