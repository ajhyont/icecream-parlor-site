import React, { useEffect,useRef } from "react";
import './AboutUs.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar/Navbar";
import backgroundImg from '../Home/foundation_img_home_page.png';
import night from '../Home/image_cropped_16_9.png';
import delivery from '../Home/delivery.png';

const AboutUs=()=>{
  const nightRef = useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const nightImage = nightRef.current;
    gsap.fromTo(nightRef.current,
      {x:'100vw'},
      {
        x:'0',
        scrollTrigger:{trigger:nightRef.current,start:"top+=800 bottom",end:"top top",scrub:1,markers:true}
      });
  },[]);
  return(
    <div style={{height:'8888vh'}}>
      <Navbar />
      <img src={backgroundImg} alt="backgroundImg" className="backgroundImg" />
      <img  ref={nightRef} src={night} alt="night" className="night" />
      <img src={delivery} alt="delivery" className="delivery" />
    </div>
  );
};

export default AboutUs;