import "./Intro.css";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Intro = () => {
  const socialLinks = [
    { href: "https://github.com/rambey-coder", icon: Github },
    { href: "https://linkedin.com/in/ramadan-bello-584a21237", icon: Linkedin },
    { href: "https://twitter.com/Rambeybello", icon: Twitter },
    { href: "https://www.instagram.com/rambey9/", icon: Instagram },
  ];

  return (
    <div className="intro-container">
      <div className="sub-container">
        <div className="block-flex">
          <p>Hi, my name is</p>
          <h2>Bello Ramadan.</h2>
          {/* <h1>I build things for the web.</h1> */}
          <h3>FRONT END & MOBILE DEVELOPER.</h3>
          {/* <p>
            Cross-platform Software Engineer with 3+ years of experience
            building and scaling web and mobile applications using React, React
            Native, Flutter, and TypeScript. Proven track record of owning
            features end-to-end, structuring modular and reusable codebases, and
            delivering production-ready integrations including authentication,
            maps, payments, real-time communication, and data visualization.
            Trusted collaborator with leadership, experienced in code reviews,
            PR management, and working independently across multiple projects.
          </p> */}

          <a
            className="button"
            href="https://drive.google.com/file/d/12gjlvCFLNFDhXpEITbKra2N9YajScv_R/view?usp=sharing"
            target="_blank"
            rel="noreferrer">
            View CV
          </a>
        </div>

        <div className="side1">
          {socialLinks.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link">
              <Icon size={25} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
