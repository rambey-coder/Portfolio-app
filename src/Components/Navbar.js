import React from 'react'
import './Navbar.css'
import { useState } from 'react'

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

  return (
    <div className={nav ? 'nav-container active' : 'nav-container' }>
        <div className="navbar">
            <div className="logo">
                <h1>RAMBEY</h1>
            </div>
            <div className="list-item">
                <div className="list-group">
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar