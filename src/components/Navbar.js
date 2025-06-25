import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  



    window.addEventListener('resize');
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container" >
            
            
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                 <i className=" fa-solid fa-bag-shopping"></i>Cart
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                  About Tallow
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>

              <li className='nav-item'>
              <a href="mailto:rrukavina913@gmail.com" className='nav-links-mobile' >
                  Contact
              </a>
              </li>
            <li className='nav-item'>
              <Button className='nav-item' buttonStyle='btn--outline'>Contact</Button>
            </li>
          </ul>
        </div>
    </nav>
    </>
  );
}

export default Navbar

