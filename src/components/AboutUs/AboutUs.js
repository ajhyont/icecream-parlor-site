import React, { useEffect,useRef } from "react";
import './AboutUs.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar/Navbar";
import backgroundImg from '../Home/foundation_img_home_page.png';
import mascotBike from '../Home/mascot_bike.png';
import night from '../Home/image_cropped_16_9.png';
import thirdImg from '../Home/thirdImg.png';
import delivery from '../Home/delivery.png';
import tailImg from '../Home/foundation_img_home_page.png';
import storeImg from '../Home/icecream-parlor.png';
import mascotLastImg from '../Home/mascot-last-img_inPixio3.png';
import icecream_snow from '../Home/icecream_snow.png';
import banner from '../Home/banner.png';
import useSticky from "../../GlobalComponents/useSticky";


const Home=()=>{

  const backgroundRef = useRef(null);
  const mascotBikeRef = useRef(null);
  const nightRef = useRef(null);
  const thirdImgRef = useRef(null);
  const deliveryRef=useRef(null);
  const tailRef=useRef(null);
  const mascotRef=useRef(null);
  const storeRef=useRef(null);
  const icecream_snowRef=useRef(null);
  useSticky([backgroundRef,nightRef,thirdImgRef,deliveryRef,tailRef],0.0,'1vh');

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    // gsap.fromTo(backgroundRef.current,
    //   { scale:24.5,transformOrigin:'36.81% 10.4%' },
    //   { scale:1,ease:'none',scrollTrigger:{trigger:backgroundRef.current,start:'top top',end:'top center',scrub:1,markers:true} }
    // );
    // gsap.fromTo(mascotBikeRef.current,
    //   {x:'-100vw'},{  x:'0',scrollTrigger:{trigger:mascotBikeRef.current,start:"top bottom",end:"top top",scrub:1,markers:true}  }
    // );
    // gsap.fromTo(nightRef.current,
    //   {x:'100vw'},{  x:'0',scrollTrigger:{trigger:nightRef.current,start:"top top",end:"top top-=100vh",scrub:1,markers:true}  }
    // );
    // gsap.fromTo(thirdImgRef.current,
    //   {x:'100vw'},{  x:'0',scrollTrigger:{trigger:thirdImgRef.current,start:"top top",end:"top top-=100vh",scrub:1,markers:true}  }
    // );
    // gsap.fromTo(mascotBikeRef.current,
    //   {x:'0'},
    //   { x:'100vw',scrollTrigger:{trigger:thirdImgRef.current,start:"top top-=300vh",end:"bottom+=100vh top",scrub:1,markers:true}  }
    // );
    // gsap.fromTo(deliveryRef.current,
    //   {x:'100vw'},{  x:'0',scrollTrigger:{trigger:deliveryRef.current,start:"top top",end:"top top-=100vh",scrub:1,markers:true}  }
    // );
    // gsap.fromTo(tailRef.current,
    //   {x:'100vw'},{  x:'0',scrollTrigger:{trigger:tailRef.current,start:"top top",end:"top top-=100vh",scrub:1,markers:true}  }
    // );
    // gsap.fromTo([storeRef.current,mascotRef.current],
    //   {x:'-100vw'},{  x:'0',scrollTrigger:{trigger:storeRef.current,start:"top top",end:"top top-=100vh",scrub:1,markers:true}  }
    // );    
    // gsap.fromTo(icecream_snowRef.current,
    //   {x:'100vw'},{  x:'0',scrollTrigger:{trigger:icecream_snowRef.current,start:"top top",end:"top top-=100vh",scrub:1,markers:true}  }
    // );
    
  },[]);
  return(
    <div className="main-container" style={{height:'500vh'}}>
      <Navbar />      
      {/* <img ref={backgroundRef} src={backgroundImg} alt="backgroundImg" className="backgroundImg" />
      <img ref={mascotBikeRef} src={mascotBike} alt="mascotBike" className="mascotBike" />
      <img ref={nightRef} src={night} alt="night" className="night" />
      <img ref={thirdImgRef} src={thirdImg} alt="thirdImg" className="thirdImg" />
      <img ref={deliveryRef} src={delivery} alt="delivery" className="delivery" />
      <img ref={tailRef} src={tailImg} alt="tailImg" className="tail" />
      <img ref={mascotRef} src={storeImg} alt="storeImg" className="store" />
      <img ref={storeRef} src={mascotLastImg} alt="mascotLastImg" className="mascotLastImg" />
      <img ref={icecream_snowRef} src={icecream_snow} alt="icecream_snow" className="icecream_snow" />
      <a href="/icecream-parlor-site/contact"><img src={banner} alt="banner" className="banner" /></a> */}
    </div>
  );

};

export default Home;