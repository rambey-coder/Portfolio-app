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
          <p>
            I'm an innovative Frontend & Mobile Developer who crafts solid,
            scalable, and delightful user experiences.
          </p>
          {/* <a
            className="button"
            href="https://drive.google.com/file/d/1ddRPgX2C8VOHmRDSqJ9kCn8bkiibAT2Q/view?usp=sharing">
            View Resume
          </a>

          <a
            className="button"
            href="https://drive.google.com/file/d/1UDhNPP8lhK85qUXWLdmwvnoEoL5hZcfy/view?usp=sharing"
            target="_blank">
            View Cover Letter
          </a> */}
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
