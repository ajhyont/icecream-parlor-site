import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
  const linkStyle={ margin:'0 1em', textDecoration:'none', color:'inherit' };
  return(
    <nav className="navbar">      
        <Link to="/icecream-parlor-site/" style={linkStyle}>Home</Link>
        <Link to="/icecream-parlor-site/aboutUs" style={linkStyle}>About Us</Link>
        <Link to="/icecream-parlor-site/contact" style={linkStyle}>Contact</Link>      
    </nav>
  );
}

export default Navbar;