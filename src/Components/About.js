import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="abt-container" id="about">
      <div className="sub-abt">
        <div className="first">
          <h1> About Me. </h1>
          <div></div>
        </div>
        <div className="general-card">
          <div className="card1">
            <p>
              I'm an innovative and passionate Frontend & Mobile Developer who
              loves to craft solid, scalable, and delightful user experiences
              across web and mobile platforms. My work lies at the intersection
              of design and engineering, creating products that are not only
              high-performing but also meticulously built for usability and
              cross-platform compatibility.
            </p>
            <p>
              In the past, I've had the opportunity to develop software across a
              variety of settings from fintech and agricultural platforms to
              AI-powered transcription services and payroll systems. I've worked
              on freelance contracts with clients like Vision Total (LVT) and
              Sangabooks, developing AI-powered applications that use the OpenAI
              and Plaid API for advanced document processing and financial
              insights. I also developed a mobile-optimized web application
              using the RingCentral Call SDK for a real-time voice calling
              service with accent conversion capabilities.
            </p>
            <p>
              My skills extend to building secure financial tools, including
              crypto wallet integration for a trading platform dashboard and
              automated payroll systems. Through all my projects, I've focused
              on progressive enhancement, UI engineering, and ensuring
              applications meet web accessibility and usability standards.
            </p>
            <p>
              In my spare time, I’m usually learning new skills to become a
              top-class engineer in both the web and mobile domains.
            </p>
          </div>
          {/* <div className="card2">
                        <img src="./Assets/profile.svg"
                            alt="profile"
                            className='profile' />

                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
