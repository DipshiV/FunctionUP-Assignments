import React, { useState } from "react";
import "./header.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-scroll";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <img src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-internet-world-grid-symbol-svg-png-icon-download-32.png" width='20px' />
          <h2>
            HMA
          </h2>
         
        </div>

        {/* 2nd menu part  */}
     
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/service">services</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
       
        {/* 3rd social media links */}
        <div className="social-media">
        <Link to="Login" >
        <button className="button n-button">Login</button>
        </Link>
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
       <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> 
    </>
  );
};

export default Navbar;