import React from 'react'
import './app.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from './Components/Main/Main'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<><Home/><Main/></>}/>

        {/* <Route path="/trips/:id" element={<Trip/>}/>
        */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App