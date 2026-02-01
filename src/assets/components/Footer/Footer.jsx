import React from 'react'
import './footer.css'
import user_icon from './user_icon.svg'

const footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <p>&copy; 2026 D K. All rights reserved.</p>

            </div>
            <div className='footer-top-right'>
                <div  className='footer-email-input'>
                    <img src={user_icon}></img>
                    <input type='email' placeholder='Enter your email' ></input>
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>

    </div>
  )
}

export default footer