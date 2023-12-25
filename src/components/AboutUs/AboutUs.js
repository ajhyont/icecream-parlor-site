import React, { useEffect,useRef } from "react";
import './AboutUs.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar/Navbar";
import backgroundImg from '../Home/foundation_img_home_page.png';
import night from '../Home/image_cropped_16_9.png';
import delivery from '../Home/delivery.png';
import tailImg from '../Home/foundation_img_home_page.png';
import storeImg from '../Home/icecream-parlor.png';
import mascotLastImg from '../Home/mascot-last-img_inPixio3.png';
import icecream_snow from '../Home/icecream_snow.png';
import banner from '../Home/banner.png';


const AboutUs=()=>{

  const backgroundRef = useRef(null);
  const nightRef = useRef(null);
  const deliveryRef=useRef(null);
  const tailRef=useRef(null);
  const mascotRef=useRef(null);
  const storeRef=useRef(null);
  const icecream_snowRef=useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);    
    // gsap.fromTo(backgroundRef.current,
    //   {x:'100vw'},{  x:'0',scrollTrigger:{trigger:backgroundRef.current,start:"top+=800 bottom",end:"top top",scrub:1,markers:true}  }
    // );
    gsap.fromTo(nightRef.current,
      {x:'100vw'},{  x:'0',scrollTrigger:{trigger:nightRef.current,start:"top+=800 bottom",end:"top top",scrub:1,markers:true}  }
    );
    gsap.fromTo(deliveryRef.current,
      {x:'100vw'},{  x:'0',scrollTrigger:{trigger:deliveryRef.current,start:"top+=800 bottom",end:"top top",scrub:1,markers:true}  }
    );
    // gsap.to(deliveryRef.current,{  scrollTrigger:{trigger:deliveryRef.current,start:"top+=2000 bottom",end:"top top",scrub:1,markers:true}  });    
    gsap.fromTo(tailRef.current,
      {x:'100vw'},{  x:'0',scrollTrigger:{trigger:tailRef.current,start:"top+=1776 bottom",end:"top top",scrub:1,markers:true}  }
    );
    gsap.fromTo([storeRef.current,mascotRef.current],
      {x:'-100vw'},{  x:'0',scrollTrigger:{trigger:storeRef.current,start:"top+=1776 bottom",end:"top top",scrub:1,markers:true}  }
    );    
    // gsap.fromTo(mascotRef.current,
    //   {x:'-100vw'},{  x:'0',scrollTrigger:{trigger:mascotRef.current,start:"top+=1776 bottom",end:"top top",scrub:1,markers:true}  }
    // );
    gsap.fromTo(icecream_snowRef.current,
      {x:'100vw'},{  x:'0',scrollTrigger:{trigger:icecream_snowRef.current,start:"top+=800 bottom",end:"top top",scrub:1,markers:true}  }
    );
    
  },[]);
  return(
    <div style={{height:'8888vh'}}>
      <Navbar />
      <img ref={backgroundRef} src={backgroundImg} alt="backgroundImg" className="backgroundImg" />
      <img ref={nightRef} src={night} alt="night" className="night" />
      <img ref={deliveryRef} src={delivery} alt="delivery" className="delivery" />
      <img ref={tailRef} src={tailImg} alt="tailImg" className="tail" />
      <img ref={mascotRef} src={storeImg} alt="storeImg" className="store" />
      <img ref={storeRef} src={mascotLastImg} alt="mascotLastImg" className="mascotLastImg" />
      <img ref={icecream_snowRef} src={icecream_snow} alt="icecream_snow" className="icecream_snow" />
      <img src={banner} alt="banner" className="banner" />
    </div>
  );

};

export default AboutUs;