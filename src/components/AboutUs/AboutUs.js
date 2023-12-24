import React from "react";
import Navbar from "../Navbar/Navbar";
import backgroundImg from '../Home/foundation_img_home_page.png';
import night from '../Home/delivery.png';
import './AboutUs.css';

const AboutUs=()=>{
  return(
    <div style={{height:'888vh'}}>
      <Navbar />
      <img src={backgroundImg} alt="backgroundImg" className="backgroundImg" />
      {/* <img src={night} alt="night" className="night" /> */}
    </div>
  );
};

export default AboutUs;