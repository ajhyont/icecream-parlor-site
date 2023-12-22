import React, {useEffect, useRef} from "react";
import backgroundImg from './foundation_img_home_page.png';
import mascotImg from './mascot_bike.png';
import night from './image_cropped_16_9.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../Navbar/Navbar";
import './Home.css';

const Home = ()=>{
  
  const backgroundRef = useRef(null);
  const nightRef = useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(backgroundRef.current,{
      scrollTrigger:{ trigger: backgroundRef.current, start:'top+=888 top',end:'bottom bottom',scrub:3,markers:true },
      x:'-100vw',
      y:'0',
      ease:'none'
    });    
    gsap.fromTo(nightRef.current,
      { x:'100vw' },
      {
        scrollTrigger: { trigger:nightRef.current,start:'top+=888 top',end:'bottom bottom',scrub:3,markers:true },
        x:'0',
      }
    );
  },[]);
  return(
    <div style={{ position:'relative',height:'8888888vh' }}>
      <Navbar />
      <img ref={backgroundRef} src={backgroundImg} alt="Background" className="background-image"/>
        {/* // style={{ width:'100%',height:'95vh',objectFit:'cover',position:'absolute',top:'50px',left:0 }}  */}
      {/* <img src={m2} alt="Background" style={{ width:'100%',height:'95vh',objectFit:'cover',position:'absolute',top:0,left:0 }} /> */}
      {/* <img ref={mascotRef} src={mascotImg} alt="Mascot" style={{ width:'100px',position:'absolute' }} /> */}
      <img ref={nightRef} src={night} alt="Background"  className="night-image"/>
    </div>
  );

};

export default Home;