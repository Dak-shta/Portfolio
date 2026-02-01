import React from 'react'
import './Hero.css'
import { Link } from "react-scroll";
import { useState } from 'react';
import Contact from '../Contact/Contact';

const Hero = () => {
  const [menu, setMenu] = useState('');

  return (
    <div id='hero' className="hero">
    <h2>Hii!! <span>I am Dakshta</span></h2>
    <p className='ab'>I am currently a frontend developer from India!</p>
    <div className='hero-action'>
  
    <div className='connect'>
      <Link
                  to="contact"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setMenu("contact")}
                >
  Connect With Me     </Link></div>
    <div className='hero-resume'>My Resume</div>
    </div>
    </div>

  )
}

export default Hero
