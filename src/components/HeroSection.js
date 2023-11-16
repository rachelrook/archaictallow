import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

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
      
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;