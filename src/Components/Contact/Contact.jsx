import React from "react"; 
import { contactConfig } from "./content_option"
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"
import { AiOutlineTwitter, AiFillYoutube, AiFillFacebook, AiFillInstagram} from "react-icons/ai"
import {FaTripadvisor, FaTwitter} from "react-icons/fa"
import './contact.css'

export default function ContactUs() {
  return (
    <section className="contact">

      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's Get In Touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, reprehenderit e repellat explicabo labore ea eaque, nihil ratione vero qui, nemo expedita
          </p>

          <div className="info">
            <div className="information">
              <MdLocationOn className="conicon"/>
              <div className="adress">
                <p>Mana Village, P.O. Mana Badrinath</p>
                <p>District Chamoli, Uttarakhand-246422</p>
              </div>
            </div>
            <div className="information">
              <MdEmail className="conicon"/>
              <div className="emailid">
                <p>mhilladventure@gmail.com</p>
              </div>
            </div>
            <div className="information">
              <MdPhone className="conicon"/>
              <div className="phoneno">
                <p>+91 94129 66171</p>
                <p>+91 63968 89138</p>
                <p>+91 91197 60282</p>
              </div>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us:</p>
            <div className="social-icons">
              <a href="#">
                <AiOutlineTwitter />
              </a>
              <a href="#">
                <AiFillYoutube />
              </a>
              <a href="#">
                <AiFillFacebook />
              </a>
              <a href="#">
                <AiFillInstagram />
              </a>
              <a href="#">
                <FaTripadvisor />
              </a>
            </div>
          </div>


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