import React from "react";
import Navbar from "../Navbar/Navbar";

const Contact=()=>{
  return(
    <div className="contact-us-container">
      <Navbar />
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your Message"></textarea>
        <buttom type="submit">Submit</buttom>
      </form>
    </div>
  );
};

export default Contact;