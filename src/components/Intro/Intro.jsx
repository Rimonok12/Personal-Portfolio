import React from 'react'
import './intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

import boy3 from '../../img/boy3.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'

import {themeContext} from '../../Context'
import {useContext} from 'react'


import { motion } from "framer-motion"


const Intro = () => {

    const transition={duration:2 ,type:'spring'}

    const theme =useContext(themeContext)
    const darkMode=theme.state.darkMode
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
            <span style={{color:darkMode? 'white' : ''}}> Hey ! I Am</span>
            <span>Rimon Debnath</span>
            <span>Enthusiastic developer eager to contribute 
            to team success through hard work, attention to 
            Full Stack Development detail and excellent organization
             skills. Clear understanding in Full Stack Web development.</span>
            </div>
            <button className="button i-button">Hire Me</button>

        <div className="i-icons">
        <a href="https://github.com/Rimonok12">
            <img src={Github} alt="" />
        </a>
        <a href="https://www.instagram.com/rimon_d_n/">
            <img src={Instagram} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/rimon12/">
            <img src={LinkedIn} alt="" />
        </a>

        </div>

        </div>
        <div className="i-right">

            {/* <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />  */}
            <img className="img1" src={boy3} alt="" />
            <motion.img
            animate={{ left: -176 , left:-100 }}
            transition={{ type: 'spring', duration: 1.2 ,stiffness: 50 }}
            src={glassesemoji} 
            className="emoji1"
            alt=""/>


            <motion.div
            animate={{ left: 406 , top:-4 }}
            // initial={{left:"74%" , top:"-4%"}}
            // whileInView={{left:"68%"}}
            transition={{ type: 'spring', duration: 1.2 ,stiffness: 50 }}
            
              style={{top:'-4%',left:'68%'}} 
              className='floating-div'
              >
                <FloatingDiv image={crown} txt1='Web'
                txt2='Developer'/>
            </motion.div>
            <motion.div 
            
            animate={{ left: -22 , left:12 }}
            transition={{ type: 'spring', duration: 2 ,stiffness: 50 }}

            
             style={{top:'18rem',left:'0rem'}} 
                           className='floating-div'
>
                <FloatingDiv image={thumbup} txt1='Best Design' 
                txt2='Award'/>
            </motion.div>
            <div className='blur' style={{
                background:"#9700db)"
            }}>
            </div>
            <div className= "blur"
            style={{
                background:"#87CEEB",
                top:'17rem',
                width:'21rem',
                height:'11rem',left:'-9rem'
            }}>
            </div>
        </div>

    </div>
  )
}

export default Intro