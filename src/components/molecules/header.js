
import React, { useState } from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const Navbar = () => {
    const [showIcons, setShowIcons] = useState(false);
  return (
  
      <nav className="navbar">    
      <div className="logo">
      <img src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-lithuania-brodynt-30.png" alt=""  width='20px' hight='20px'/>
      <h2>HMA</h2></div>
      <ul className={showIcons ? "nav-links-mobile" : "nav-links"} onClick={() => setShowIcons(false)}>
      <Link to='/' className="home">
      <li>Home</li>
      </Link>
      <Link to='/about' className="about">
      <li>About</li>
      </Link>
      <Link to='/projects' className="project">
      <li>Projects</li>
      </Link>
      <Link to='/vedios' className="vedios">
      <li>Vedios</li>
      </Link>
      <Link to='/contact' className="contact">
      <li>Contacts</li>
      </Link>
      <Link to='/login' className="login">
      <li>Log in</li>
      </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={()=> setShowIcons(!showIcons)}>
      {showIcons ?<GiHamburgerMenu/> :<GiHamburgerMenu/>}
        </button>
      </nav>   
          
      
  )
};

export default Navbar;