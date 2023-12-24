import React from "react";
import './AboutUs.css';
import Navbar from "../Navbar/Navbar";
import backgroundImg from '../Home/foundation_img_home_page.png';
import night from '../Home/image_cropped_16_9.png';
import delivery from '../Home/delivery.png';

const AboutUs=()=>{
  return(
    <div style={{height:'8888vh'}}>
      <Navbar />
      <img src={backgroundImg} alt="backgroundImg" className="backgroundImg" />
      <img src={night} alt="night" className="night" />
      <img src={delivery} alt="delivery" className="delivery" />
    </div>
  );
};

export default AboutUs;