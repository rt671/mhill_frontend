import React from 'react'
import './app.css'
import Main from './Components/Main/Main'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <NavBar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App