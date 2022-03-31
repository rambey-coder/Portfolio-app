import React from 'react'
import './Intro.css' 
// import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="side1">

          <img src="./Assets/github.svg" alt="icon" className='icon'/>

          <img src="./Assets/linkedIn.svg" alt="icon" className='icon'/>

          <img src="./Assets/twitter.svg" alt="icon" className='icon'/>

          <img src="./Assets/instagram.svg" alt="icon" className='icon'/>

        <span></span>
      </div>
        <div className="sub-container">
          <div className="block-flex">
            <p>Hi, my name is</p>
            <h2>Bello Ramadan.</h2>
            <h1>I build things for the web.</h1>
            <h3>FRONT-END WEB DEVELOPER.</h3>
            <p>Innovative Entry-level Front End Developer with good years of experience in maintaining and building web pages. I like to craft solid and scalable frontend products with great user experiences. Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
            <button>Hire Me</button>
          </div>
        </div>
    </div>
  )
}

export default Intro