import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import './Navbar.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/green-sky.mp4' autoPlay loop muted fixed />
      <h1>Don't wait for inspiration.</h1>
      <p>It comes while working.</p><br></br>
      <div className='center'>
      <Link to="https://rachelrukavina.com/aboutme">
        <img className='circle-me' src='/images/me-pink-brick.jpg' alt="Rachel Headshot"/>
        </Link>
      </div>
      
      <div className='hero-btns'>
      <Link to="https://www.linkedin.com/in/rachelrukavina/">
        <img className='social' src='/images/pink-in.png' alt="LinkedIN"/>
        </Link>
        <Link to="https://github.com/rachelrook">
        <img className='social' src='/images/pink-gh.png' alt="github"/>
        </Link>
        <Link to="https://www.facebook.com/rachel.rukavina.5">
        <img className='social' src='/images/pink-fb.png' alt="facebook"/>
        </Link>
        <Link to="https://www.instagram.com/rachelarukavina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <img className='social' src='/images/pink-ig.png' alt="ingstagram"/>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;