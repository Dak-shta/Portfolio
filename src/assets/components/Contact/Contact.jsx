import React from 'react'
import { useState } from 'react'
import './Contact.css'
import mail_icon from './mail_icon.svg'
import call_icon from './call_icon.svg'

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "5bc3686d-eea4-4aa4-8d35-f489be195015");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");

    if (data.success) {
      alert("Form submitted successfully");
      event.target.reset(); // Clear form fields
    }
  };

  return (
    <div id='contact' className='contact' >
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
            <form onSubmit={onSubmit} className='contact-right'>
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