import React, {useEffect, useRef} from "react";
import backgroundImg from './foundation_img_home_page.png';
import mascotImg from './mascot_bike.png';
import night from './image_cropped_16_9.png';
import deliveryImg from './delivery.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../Navbar/Navbar";
import './Home.css';

const Home = ()=>{
  
  const backgroundRef = useRef(null);
  const nightRef = useRef(null);
  const deliveryRef = useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(backgroundRef.current, {scale:28, transformOrigin:'37% 1%'} );
    const zoomOut_Tl=gsap.timeline( {scrollTrigger: {trigger:nightRef.current,start:'top+=10 top',end:'bottom bottom',scrub:1,markers:true},} );
    zoomOut_Tl.to(backgroundRef.current, {scale:1,ease:'none'} );
    const backgroundToNight_Tl = gsap.timeline( {scrollTrigger: {trigger:nightRef.current,start:'top+=888 top',end:'bottom bottom',scrub:1.2,markers:true},} );
    backgroundToNight_Tl      
      .to(backgroundRef.current, {x:'-66vw'} )
      .fromTo(nightRef.current, {x:'100vw'},{x:'0'},);

      const nightToDelivery_Tl = gsap.timeline( {scrollTrigger: {trigger:nightRef.current,start:'top+=1778 top',end:'bottom bottom',scrub:1.2,markers:true},} );
      nightToDelivery_Tl
        .to(nightRef.current, {x:'-66vw'} )
        .fromTo(deliveryRef.current, {x:'100vw'},{x:'0'} );
    // gsap.to(backgroundRef.current,{
    //   scrollTrigger:{ trigger: backgroundRef.current, start:'top+=888 top',end:'bottom bottom',scrub:3,markers:true },
    //   x:'-100vw',y:'0',ease:'none'
    // });    

    // const nightTl = gsap.timeline({  scrollTrigger: {trigger:nightRef.current,start:'top+=888 top',end:'bottom bottom',scrub:3,markers:true},  });
    // nightTl
    //   .fromTo(nightRef.current, {x:'100vw'},{x:'0'} )
    //   .to(nightRef.current, {x:'-100vw'} );
  },[]);
  return(
    <div style={{ position:'relative',height:'8888888vh' }}>
      <Navbar />
      <img ref={backgroundRef} src={backgroundImg} alt="Background" className="background-image"/>        
      <img ref={nightRef} src={night} alt="night"  className="night-image"/>
      <img ref={deliveryRef} src={deliveryImg} alt="deliveryImg"  className="delivery-image"/>
    </div>
  );

};

export default Home;