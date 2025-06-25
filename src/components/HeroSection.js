import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import './Navbar.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/ortho-candles.mp4' autoPlay loop muted fixed />
      <img className='at-logo' src='/images/archaic-logo-white.png' alt="archaic tallow logo"/>
      <div className='center'>
      <Link to="https://archaictallow.com">
        <img className='circle-me' src='/images/arc.jpg' alt="Archaic Tallow Jar"/>
        </Link>
      </div>
      
      <div className='hero-btns'>

        <Link to="https://www.instagram.com/archaictallow?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <img className='social' src='/images/pink-ig.png' alt="instagram"/>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;