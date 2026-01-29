import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='title'>
        <h1 className='head'>About ME</h1>
        </div>
        <div className='content'>
            <div className='para'>
         <p>   I am a passionate Web Developer and B.Tech student specializing in HTML, CSS, JavaScript, and React. I enjoy building responsive, interactive, and user-friendly web applications. I am actively looking for Web Development Internship opportunities where I can enhance my skills, gain industry experience, and contribute to real-world projects.
       </p>
       </div>
        </div>
        <div className='skills'>
            <div className='skill'><p>HTML&CSS</p><hr className='h' style={{width:'50%'}}/></div>
            <div className='skill'><p>React JS</p><hr className='r'style={{width:'50%'}}/></div>
            <div className='skill'><p>JavaScript</p><hr className='j' style={{width:'50%'}}/></div>
        </div>
    </div>
  )
}

export default About