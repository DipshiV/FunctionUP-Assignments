
import React, { useState } from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";


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
      <Link to='/AboutUs' className="login">
      <li>AboutUs</li>
      </Link>
      <Link to='/Login' className="login">
      <li>Login</li>
      </Link>
      <Link to='/Register' className="login">
      <li>Register</li>
      </Link>
     
      </ul>
      <button className="mobile-menu-icon" onClick={()=> setShowIcons(!showIcons)}>
      {showIcons ?<RxCrossCircled/> :<GiHamburgerMenu/>}
        </button>
      </nav>   
          
      
  )
};

export default Navbar;