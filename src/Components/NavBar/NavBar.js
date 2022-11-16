import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbDotsVertical} from 'react-icons/tb'
import logo from '../../Assets/logo.png'
import walogo from '../../Assets/whatsapp_logo.png'
import { Link } from 'react-router-dom'
// import {SiYourtraveldottv} from 'react-icons/si'

const NavBar = ({status}) => {
  const [active, setActive] = useState('navBar');
  const showNav = ()=> {
    setActive('navBar activeNavBar');
  }

  const closeNav = ()=> {
    setActive('navBar');
  }

  return (
    <section className = "navBarSection">
      <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
            <img src={logo} className="icon" />
              <h1>M Hill Adventure.</h1>
            </a>
          </div>

          <div className={active} onMouseLeave={closeNav}>
            <ul className="navLists flex">
              <li className="navItem">
                <Link className="navLink link" to="/">Home</Link>
              </li>
              <li className="navItem">
                <Link className="navLink link" to="/packages/summer">Summer</Link>
              </li>
              <li className="navItem">
                <Link className="navLink link" to="/packages/winter">Winter</Link>
              </li>
              <li className="navItem">
                <Link className="navLink link" to="/packages/expeditions">Expeditions</Link>
              </li>
              {/* <li className="navItem">
                <a href="#" className="navLink">Pages</a>
              </li> */}
              <li className="navItem">
                <Link className="navLink link" to="/contact">Contact</Link>
              </li>
            <button className="btn">
                <a href="https://wa.me/919119760282?text=Hey%21%0AI%20visited%20your%20website%20and%20wanted%20to%20enquire%20about%20the%20trips%20offered%20by%20your%20organization%20M%20Hill%20Adventures%21" target="_blank">BOOK NOW</a>
            </button>
            </ul>

            <div className="closeNavBar" onClick={closeNav}>
              <AiFillCloseCircle className="icon"/>
            </div>
            </div>

          <div className="openNavBar" onMouseOver={showNav}>
            <TbDotsVertical className="icon"></TbDotsVertical>
          </div>
      </header>
      <a aria-label="Chat on WhatsApp" href="https://wa.me/919119760282?text=Hey%21%0AI%20visited%20your%20website%20and%20wanted%20to%20enquire%20about%20the%20trips%20offered%20by%20your%20organization%20M%20Hill%20Adventures%21" className="wabtn" target="_blank"> <img alt="Chat on WhatsApp" src= {walogo} /></a>
    </section>
  )
}

export default NavBar
