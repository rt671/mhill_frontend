import React from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'

const NavBar = () => {
  return (
    <section className = "navBarSection">
      <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1>Travel.</h1>
            </a>
          </div>

          <div className="navBar">
            <ul className="navLists grid">
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

            <div className="closeNavBar">
              <AiFillCloseCircle className="icon"/>
            </div>
          </div>
      </header>
    </section>
  )
}

export default NavBar