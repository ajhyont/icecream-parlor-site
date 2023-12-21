import React, {useEffect, useRef} from "react";
import backgroundImg from './foundation_img_home_page.png';
import mascotImg from './mascot_bike.png';
import night from './image_cropped_16_9.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../Navbar/Navbar";

const Home = ()=>{
  
  const nightRef = useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ markers:true });
    gsap.to(nightRef.current,{ 
      scrollTrigger: { trigger:nightRef.current,start:'top top',end:'bottom bottom',scrub:8, },
      opacity:1,
    });
  },[]);
  return(
    <div style={{ position:'relative',height:'190vh' }}>
      <Navbar />
      <img src={backgroundImg} alt="Background" 
        style={{ width:'100%',height:'95vh',objectFit:'cover',position:'absolute',top:'50px',left:0,zIndex:0 }} />
      {/* <img src={m2} alt="Background" style={{ width:'100%',height:'95vh',objectFit:'cover',position:'absolute',top:0,left:0 }} /> */}
      {/* <img ref={mascotRef} src={mascotImg} alt="Mascot" style={{ width:'100px',position:'absolute' }} /> */}
      <img ref={nightRef} src={night} alt="Background" 
        style={{ width:'100%',height:'95vh',objectFit:'cover',position:'absolute',top:'50px',left:0,zIndex:1,opacity:0, }} />
    </div>
  );

};

export default Home;