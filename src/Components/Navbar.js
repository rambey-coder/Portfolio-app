import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-scroll"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const background = () => {
        if(window.scrollY >= 60) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', background)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    const handleScroll = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth',
            duration: 500
        })
    }

  return (
    <div className={nav ? 'nav-container active' : 'nav-container' }>
        <div className="navbar">
            <div className="logo">  
                <h1 onClick={handleScroll}>RAMBEY</h1>
            </div>
                
                <div className={click ? 'list-group active' : 'list-group'}>
                        <Link
                        className='nav-link'
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        About
                        </Link>

                        <Link
                        className='nav-link'
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Work
                        </Link>

                        <Link
                        className='nav-link'
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Contact
                        </Link>
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