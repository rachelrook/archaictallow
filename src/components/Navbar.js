import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  

  const [click, setClick ] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
    };
  
    useEffect(() => {
      showButton();
    }, []);
    
    window.addEventListener('resize', showButton);
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container" >
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Rachel Rukavina
              <i className=" fa-solid fa-splotch"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                  About Me
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>

              <li className='nav-item'>
                <a href="http://rubiesoftruth.com" className='nav-links' onClick={closeMobileMenu}>
                  Blog
                </a>
              </li>
              <li className='nav-item'>
                <a href="https://aquamarine-renie-43.tiiny.site/" className='nav-links' onClick={closeMobileMenu}>
                  Resume
                </a>
              </li>

              <li className='nav-item'>
              <a href="mailto:rrukavina913@gmail.com" className='nav-links-mobile' >
                  Contact Me
              </a>
              </li>
            </ul>
            { button  &&
            <Button buttonStyle='btn--outline'>Contact Me</Button>
              }
            </div>
    </nav>
    </>
  );
}

export default Navbar

