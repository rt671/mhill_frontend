import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option"
import './contact.css'
// import 'bootstrap/dist/css/bootstrap.css';

export default function ContactUs() {
  
  return (
    <section className="contact">

      <div className="form">
        <div className="contact-info">
          
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="Contact.jsx" autoComplete="off">
            <h3 className="heading">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type= "tel" name="phone" className="input" />
              <label htmlFor="">Phone No.</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="butn"/>
          </form>
        </div>
      </div>

      <script src="hover.js"></script>

    </section>
  );
}