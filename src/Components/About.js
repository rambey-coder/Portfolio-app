import React from 'react'
import './About.css'
import Reveal from 'react-reveal/Reveal';

const About = () => {
  return (
    <div className="abt-container" id='about'>
        <Reveal effect="fadeInUp">
        <div className="sub-abt">
            <div className="first">
                <h1>About Me.</h1>
                <div></div>
            </div>
        <div className="general-card">
            <div className="card1">
                <p>Hello! My name is Ramadan, and I enjoy creating things that live on the internet. My interest in web development started a long time ago when I decided to try editing custom wordpress themes, which made me develop huge interest in web development.
                </p>

                <p>
                Fast-forward to today, and I’ve had the privilege of working on many projects using differnt tools such as HTML, CSS, JAVASCRIPT, REACT JS. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                </p>

                <a className='button' href='#'>View Resume</a>

               <a className='button' href='#'>Download Resume</a>

               <p>Here are technologies I’ve been working with recently:</p>

               <div className="second">
               <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>JAVASCRIPT</li>
                   <li>REACT JS</li>
               </ul>

               <ul>
                    <li>GIT & GITHUB</li>
                   <li>BOOTSRAP</li>
                   <li>TAILWINDCSS</li>
               </ul>
               </div>
            </div>
            <div className="card2">
                <img src="./Assets/hand-coding-animate.svg" alt="profile" className='profile'/>
            </div>
        </div>
        </div>
        </Reveal>
    </div>
  )
}

export default About