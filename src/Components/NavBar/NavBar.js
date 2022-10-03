import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbDotsVertical} from 'react-icons/tb'
import {SiYourtraveldottv} from 'react-icons/si'

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
            <SiYourtraveldottv className="icon" />
              <h1>Travel.</h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Packages</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">About</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Pages</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">News</a>
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