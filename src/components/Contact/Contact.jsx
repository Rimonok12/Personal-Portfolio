import React , { useRef , useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';


import {themeContext} from '../../Context'
import {useContext} from 'react'


const Contact = () => {
    const form = useRef();
    const theme =useContext(themeContext)
    const darkMode=theme.state.darkMode

const [done,setDone]=useState(false)

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i4smvyd', 'template_8jhyddw', form.current, 'v42yhsjchtTMYSG0U')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
<div className="contact-form">
    <div className="w-left">
        <div className="awesome">
            <span style={{color:darkMode? 'white' : ''}}>Get In Touch</span>
            <span>Contact Me</span>
            <div className="blur s-blur1"
            style={{background:"#ABF1FF94"}}></div>
        </div>
    </div>
    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="Name" name="user_name" className="user" placeholder="Name"/>
            <input type="Email" name="user_email" className="user" placeholder="Email"/>
            <textarea name="message" className="user" placeholder="Message"/>
            <input type="submit" value="Send" className="button" />
            <span > {done && "Thanks For Contacting Me!😊"}</span>

            <div className="blur c-blur1" 
                style={{background:"var(--purple)"}}>
                </div>
        </form>
    </div>
</div> 
 )
}

export default Contact