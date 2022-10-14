import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option"
import './Contact.css'
// import 'bootstrap/dist/css/bootstrap.css';

export default function ContactUs() {
  

  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit omnis impedit atque iure dolor libero iste rem, aspernatur nemo soluta aliquam amet molestiae! Molestias provident deleniti numquam neque porro laborum?</p>
      </div>
      <div className="contained">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"></div>
            <div className="text">
              <h3>Adress</h3>
              <p>Uttarakhand, <br>India</br></p>
            </div>
          </div>
          <div className="box">
            <div className="icon"></div>
            <div className="text">
              <h3>Phone</h3>
              <p>+91 82876 33775</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"></div>
            <div className="text">
              <h3>Email</h3>
              <p>mhilladventure@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}