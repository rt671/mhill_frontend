import React, {useEffect} from "react";
import './footer.css'
import video2 from '../../Assets/video.mp4'
import { FiSend, FiChevronRight } from "react-icons/fi";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram, AiFillFacebook} from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa"
import logo from '../../Assets/logo.png'
import { Link } from "react-router-dom";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  // react hook for scroll animation
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src= {video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep In Touch</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Your Email Address!'/>
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <img src= {logo} className="icon"/>
                Mhill Travels.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Being in the tourism business since 1994, M Hill Adventure has proven to be pivotal in delivering picturesque sightseeing experiences to its customers in the most affordable way. We provide group and individual tours in and across Uttarakhand.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillFacebook className="icon" />
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>
          
          {/* Group A */}
          <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks grid smolGrid">
            <div className="linkGroup" id="padGroup1">
              <span className="groupTitle">
                OUR ORGANIZATION
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                <Link className="navLink link" to="/">Hiking Tips</Link>
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                <Link className="navLink link" to="/packages/all">Tourism</Link>
              </li>

              {/* <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li> */}

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                <Link className="navLink link" to="/packages/summer">Summer Trips</Link>
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                <Link className="navLink link" to="/packages/winter">Winter Trips</Link>
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                <Link className="navLink link" to="/packages/expeditions">Expeditions</Link>
              </li>

              {/* <li className="footerList flex">
                <FiChevronRight className="icon"/>
                <Link className="navLink link" to="/">Rent Cars</Link>
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trip Advisor
              </li>  */}

            </div>
          </div>

          {/* Group B */}
          <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks grid smolGrid">
            <div className="linkGroup" id="padGroup2">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Contact Us
              </li>
              
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Satopanth & Swargarohini
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Kuari Pass Trek
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Dronagiri / Bagani Trek
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Brahmatal Trek
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>Don't wait! Have the best tourism experience of your life with us!</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer