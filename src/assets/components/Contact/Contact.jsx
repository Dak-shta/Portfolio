import React from 'react'
import './Contact.css'
import mail_icon from './mail_icon.svg'
import call_icon from './call_icon.svg'

const Contact = () => {
  return (
    <div className='contact' >
        <div className='contact-title'>
            <h1>Get In Touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's Talk</h1>
                <p>I am currently available to take on new projects.</p>
                <div className='contact-details'>
                        <div className='contact-detail'>
                        <img src={mail_icon}></img><p>dakshtakulshreshtha26@gmail.com</p>
                        </div>
               
                <div className='contact-detail'>
                    <img src={call_icon}></img><p>XXXXXXXX</p>
                </div>
            </div>
            </div>
            <form className='contact-right'>
                <label for=''>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name here...'></input>
                <label for=''>Email</label>
                <input type='text' name='name' placeholder='Drop your email here'></input>
                <label for=''>Write Your message here</label>
                <textarea name='message' rows='8' placeholder='Message here...'></textarea>
                <button className='contact-submit' type='submit'>Submit here</button>
            </form>
        </div>
    </div>
  )
}

export default Contact