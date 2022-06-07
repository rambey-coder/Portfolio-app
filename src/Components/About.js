import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="abt-container" id='about' >
            <div className="sub-abt" >
                <div className="first" >
                    <h1> About Me. </h1>
                    <div></div>
                </div>
                <div className="general-card" >
                    <div className="card1" >
                        <p>Hello! My name is Ramadan, and I enjoy creating things that live on the internet. My interest in web development started a long time ago when I decided to try editing custom wordpress themes, which made me develop huge interest in web development. </p>

                        <p>
                            Fast - forward to today, and I’ ve had the privilege of working on many projects using different tools such as HTML, CSS, JAVASCRIPT, REACT JS. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement
                            for a variety of clients. </p>

                        <p>Here are technologies I’ ve been working with recently: </p>

                        <div className="second">
                            <div className='technology'>
                                <div> HTML </div>
                                <div>CSS </div>
                                <div> JAVASCRIPT </div>
                            </div>

                            <div className='technology'>
                                <div> REACT JS </div>
                                <div> GIT & GITHUB </div>
                                <div> BOOTSRAP </div>
                            </div>

                            <div className='technology'><div> TAILWINDCSS </div></div>
                        </div>
                    </div>
                    <div className="card2">
                        <img src="./Assets/profile.svg"
                            alt="profile"
                            className='profile' />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default About