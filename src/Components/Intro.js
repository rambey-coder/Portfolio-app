import React from 'react'
import './Intro.css' 
// import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="side1">
          <a href='https://github.com/rambey-coder' className='icon-link' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a588b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>

          <a href='https://linkedin.com/in/ramadan-bello-584a21237' className='icon-link' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a588b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>

          <a href='https://twitter.com/Rambeybello' className='icon-link' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a588b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>

          <a href='https://www.instagram.com/rambey9/' className='icon-link' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a588b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>

        <span></span>
      </div>
        <div className="sub-container">
          <div className="block-flex">
            <p>Hi, my name is</p>
            <h2>Bello Ramadan.</h2>
            <h1>I build things for the web.</h1>
            <h3>FRONT-END WEB DEVELOPER.</h3>
            <p>Innovative Front End Developer with good years of experience in maintaining and building web pages. I like to craft solid and scalable frontend products with great user experiences. Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
            <a className='button' href='#contact'>Hire Me</a>
            
            <a className='button' href='https://drive.google.com/file/d/1hF56kgX_zd7c4c2PcSDduCPGfTraQEl_/view?usp=sharing' target='_blank'>View Resume</a>
          </div>
        </div>
    </div>
  )
}

export default Intro