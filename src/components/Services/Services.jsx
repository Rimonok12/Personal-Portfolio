import React from 'react'
import './services.css'
import Card from '../Card/Card'

import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

import { motion } from "framer-motion"


import {themeContext} from '../../Context'
import {useContext} from 'react'


import Resume from './Rimon.pdf'


const Services = () => {

    const theme =useContext(themeContext)
    const darkMode=theme.state.darkMode

  return (
    <div className="services" id="Services" >
    <div className="awesome">
        <span style={{color:darkMode? 'white' : ''}}>My Awesome</span>
        <span>Services</span>
        <span>I am very focus on my work , 99.9% task done on time.<br/>
        Give me a task and see the result.</span>

        <a href={Resume} download >
        <button className="button s-button">Download CV</button>
        </a>
        
        
        <div className="blur s-blur1" 
            style={{
                background:'#ABF1FF94'
            }}>
        </div>
    </div>
            <div className="cards">
             <motion.div 
              animate={{  left:425 , left: 640 }}
                transition={{ type: 'spring', duration: 1. ,stiffness: 50 }}
             
             style={{left:'14rem'}}>
                <Card 
                    emoji = {HeartEmoji}
                    heading={'Design'}
                    detail={'Figma, Photoshop, Adobe Lightroom , Adobe XD'}
                />
             </motion.div>
             <motion.div 
              animate={{  left:-25 , left:70 ,top: 90}}
                transition={{ type: 'spring', duration: 1. ,stiffness: 50 }} style={{top:'12rem',left:"-4rem"}}>
                <Card 
                    emoji = {Glasses}
                    heading={'Developer'}
                    detail={'Html, Css, JavaScript, Reactjs, Nodejs,MongoDB'}
                />
             </motion.div>
             <motion.div 
              animate={{  left:345 , left: 445 , top: 470 }}
              
                transition={{ type: 'spring', duration: 1.}} 
                style={{left:'12rem',top:'19rem'}}>
                <Card 
                    emoji = {Humble}
                    heading={'UI/UX'}
                    detail={'Bootstrap ,Material UI, Tailwind CSS , React Boottrap'}
                />
             </motion.div>
             <div className="blur s-blur2" 
             style={{
                background:"var(--purple)"
             }}></div>
             </div>
    </div>
 )
}

export default Services