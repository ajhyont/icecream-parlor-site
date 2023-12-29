import React, { useEffect,useRef } from "react";
import useSticky from "../../GlobalComponents/useSticky";
import './AboutUs.css';
import img from './test1.png';
import backgroundImg from '../Home/foundation_img_home_page.png';

const AboutUs=()=>{
  
  const imgRef=useRef(null);
  const bkRef=useRef(null);
  useSticky(0.01,'0vh',imgRef);
  useSticky(0.01,'20vh',bkRef);
  return(
    <div className="main">      
      <img ref={imgRef} src={img} alt="img" className="imgs" />    
      <img ref={bkRef} src={backgroundImg} alt="backgroundImg" className="backgroundImg" />
      <div className="wide-content">Waheguruji!</div>      
    </div>
  );

};

export default AboutUs;