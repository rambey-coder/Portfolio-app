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
              Cross-platform Software Engineer with 3+ years of experience
              building scalable web and mobile applications using React, React
              Native, Flutter, and TypeScript. I specialize in crafting
              performant, accessible, and user-centric experiences at the
              intersection of design and engineering.
            </p>
            <p>
              I’ve delivered production-grade solutions across fintech,
              agriculture, AI-powered transcription, and payroll systems,
              working on both freelance and product teams. My experience
              includes building secure financial tools, AI-driven applications
              leveraging OpenAI and Plaid APIs, real-time voice solutions using
              the RingCentral Call SDK, crypto wallet integrations, and
              automated payroll platforms.
            </p>
            <p>
              I’m known for owning features end-to-end, writing modular and
              reusable code, and delivering reliable integrations such as
              authentication, maps, payments, real-time communication, and data
              visualization. I work comfortably both independently and in
              collaboration with leadership, contributing through code reviews,
              PR management, and architectural decisions.
            </p>
            <p>
              Outside of active projects, I continuously refine my skills to
              grow into a top-class engineer across both web and mobile
              ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
