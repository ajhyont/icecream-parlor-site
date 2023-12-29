import React, { useRef } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import useSticky from "../../GlobalComponents/useSticky";

function Navbar(){
  const linkStyle={ margin:'0 1em', textDecoration:'none', color:'inherit' };
  const navbarRef=useRef(null);
  useSticky([navbarRef],0.0,'1vh');
  return(
    <nav ref={navbarRef} className="navbar">      
        <Link to="/icecream-parlor-site/" style={linkStyle}>Home</Link>
        <Link to="/icecream-parlor-site/aboutUs" style={linkStyle}>About Us</Link>
        <Link to="/icecream-parlor-site/contact" style={linkStyle}>Contact</Link>      
    </nav>
  );
}

export default Navbar;