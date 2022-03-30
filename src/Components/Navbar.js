import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { motion } from "framer-motion"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const background = () => {
        if(window.scrollY >= 80) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', background)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

  return (
    <div className={nav ? 'nav-container active' : 'nav-container' }>
        <div className="navbar">
            <div className="logo">
                <h1>RAMBEY</h1>
            </div>
                
                <div className={click ? 'list-group active' : 'list-group'}>
                    <li id='About'>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
                </div>


            <div className="icons" onClick={handleClick}>
                <div className={click ? "bar1 active" : "bar1"}></div>
                <div className={click ? "bar2 active" : "bar2"}></div>
                <div className={click ? "bar3 active" : "bar3"}></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar