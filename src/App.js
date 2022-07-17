import Navbar from "./components/navbar/Navbar"
import React from "react"
import Intro from "./components/Intro/Intro"
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact"
import './App.css'
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import {themeContext} from './Context'
import {useContext} from 'react'


function App() {
  const theme =useContext(themeContext)
  const darkMode=theme.state.darkMode



  return (
    <div className="App"
    
    style={{
      background :darkMode? '#1b2328' : '' ,
      color : darkMode? 'white': ''
    }}
    
    >
    <Navbar/> 
    <Intro />  
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
 