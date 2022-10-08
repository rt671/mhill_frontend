import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbDotsVertical} from 'react-icons/tb'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
// import {SiYourtraveldottv} from 'react-icons/si'

const NavBar = () => {
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
              <h1>M Hill Adventures.</h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink"><Link className="link" to="/">Home</Link></a>
              </li>
              <li className="navItem">
                <a className="navLink"><Link className="link" to="/packages">Packages</Link></a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">About</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Pages</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Contact</a>
              </li>
            
            <button className="btn">
                <a href="#">BOOK NOW</a>
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