import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
  const navStyle={ display:'flex', justifyContent:'flex-end',padding:'10px',backgroundColor:'#f0f0f0' };
  const linkStyle={ margin:'0 1em', textDecoration:'none', color:'inherit' };
  return(
    <nav style={navStyle}>      
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about-us" style={linkStyle}>About Us</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>      
    </nav>
  );
}

export default Navbar;