import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbDotsVertical} from 'react-icons/tb'
import logo from '../../Assets/logo.png'
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

          <div className={active}>
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
              <li className="navItem">
                <a href="#" className="navLink">Pages</a>
              </li>
              <li className="navItem">
                <Link className="navLink link" to="/contact">Contact</Link>
              </li>
            <button className="btn">
                <a href="mailto:vaibhav.fulara123@gmail.com">BOOK NOW</a>
            </button>

            </ul>
            
           
            <div className="closeNavBar" onClick={closeNav}>
              <AiFillCloseCircle className="icon"/>
            </div>
            </div>

          <div className="openNavBar" onClick={showNav}>
            <TbDotsVertical className="icon"></TbDotsVertical>
          </div>
      </header>
    </section>
  )
}

export default NavBar
