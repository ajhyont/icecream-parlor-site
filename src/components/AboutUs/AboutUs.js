import React, { useEffect,useRef } from "react";
import './AboutUs.css';
import img from './test1.png';

const AboutUs=()=>{
  
  const imgRef = useRef(null);
  useEffect(()=>{
    const handleScroll=()=>{
      if(imgRef.current){
        const stickyStart=imgRef.current.offsetTop-window.innerHeight*0.3;
        const isSticky = window.scrollY > stickyStart;
        imgRef.current.style.position = isSticky ? 'fixed' : 'absolute';        
        // imgRef.current.style.top = isSticky ? '30vh' : 'initial';
        imgRef.current.style.top = '30vh';
      }
    };
    window.addEventListener('scroll',handleScroll);
    return()=> window.removeEventListener('scroll',handleScroll);
  },[]);
  return(
    <div className="main">      
      <img ref={imgRef} src={img} alt="img" className="imgs" />      
      <div className="wide-content">Waheguruji!</div>      
    </div>
  );

};

export default AboutUs;