import React, {useEffect} from "react";
import './footer.css'
// import video2 from '../../Assets/video2.mp4'
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa"

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
        {/* <video src='video2' loop autoPlay muted type="video/mp4"></video> */}
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep In Touch</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Your Email Adress!'/>
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon"/> Mhill Travels.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sint, aspernatur, laudantium similique minima corrupti id et dolor 
              laborum totam incidunt nobis sequi, nulla distinctio cumque
               unde aliquid eum ipsa reprehenderit?
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>

          {/* Group A */}
          <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                OUR ORGANIZATION
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>
            </div>
          </div>

          {/* Group B */}
          <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rent Cars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trip Advisor
              </li>
            </div>
          </div>

          {/* Group C */}
          <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Satopanth & Swargarohini
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                ABC Place
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                PQR Place
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                XYZ Place
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