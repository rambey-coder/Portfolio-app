import React from "react";
import "./Work.css";

const Work = () => {
  const exp = [
    {
      year: "2022-2023",
      project: "Finosell",
      role: "Contract Front-End Developer",
      info: "Participated in daily stand-ups and code reviews to maintain and improve the quality of the codebase for a financial technology product. My responsibilities included translating user interfaces and implementing designs that were intuitive, aesthetically pleasing, and responsive across various screen sizes.",
    },
    {
      year: "2023-2025",
      project: "Techbeaver",
      role: "Full-time Frontend and Mobile Developer",
      info: "Collaborated on a team to build and maintain a suite of web and mobile applications. I worked closely with cross-functional teams to translate designs into robust, responsive user interfaces and ensured a seamless user experience across multiple devices.",
    },
    {
      year: "2024-2025",
      project: "Vision Total (LVT)",
      role: "Freelance Front-End Developer",
      info: "Developed an AI-powered document processing feature for an ophthalmologist at a small Dutch company. The application automated data extraction from medical documents using the OpenAI API.",
      link: "https://meek-marzipan-86aacd.netlify.app/",
    },
    {
      year: "2024-2025",
      project: "Sangabooks",
      role: "Contract Front-End Developer",
      info: "Developed an AI-powered financial application that integrated the Plaid API to provide users with in-depth financial insights. The application allowed for secure account linking and data analysis, giving users a comprehensive view of their finances.",
      link: "https://sanga-books-dev.netlify.app/",
    },
    {
      year: "2025-2025",
      project: "AOS",
      role: "Freelance Front-End and Mobile Developer",
      info: "Developed a comprehensive mobile application for farmers and a complementary web application for administrative users. I implemented real-time data synchronization to ensure that agricultural data was always up-to-date across all platforms. The project focused on building a seamless and efficient system for managing farm data.",
      link: "https://aos-web-app.netlify.app/",
    },
    {
      year: "2025-2025",
      project: "Olive Option (Cryptionary)",
      role: "Freelance Front-End Developer",
      info: "Designed and developed the user interface for a cryptocurrency trading platform dashboard. My work included integrating crypto wallet functionality and creating a clean, intuitive layout that made it easy for users to track their assets and trades.",
      link: "https://olive-affiliate.netlify.app/",
    },
    {
      year: "2024-2025",
      project: "Info Payroll",
      role: "Freelance Front-End Developer",
      info: "Developed a full-fledged payroll and invoice automation system. I was responsible for creating a user-friendly interface that streamlined the process of generating payroll, sending invoices, and managing billing records.",
    },
    {
      year: "2025-2025",
      project: "Ring Accent Call",
      role: "Freelance Front-End Developer",
      info: "Designed, developed, and maintained a web application for real-time voice calling. This project utilized the RingCentral Call SDK and an AI model for accent conversion, ensuring smooth and clear communication.",
      link: "https://ring-accent.netlify.app/",
    },

    {
      year: "2025-2025",
      project: "Cribeasy Mobile",
      role: "Mobile Developer",
      info: "Developed a React Native mobile application with Expo to connect renters, agents, and landlords across Africa. The app serves as a user-centric platform that addresses critical pain points in property management and rental services, boosting efficiency and trust.",
    },
  ];
  return (
    <div className="work-container" id="work">
      <div className="sub-wrk">
        <div className="first">
          <h1>PROJECTS.</h1>
          <div></div>
        </div>

        <div className="proj-card">
          {exp.map((item, index) => (
            <div className="exp-card" key={index}>
              <p className="exp-year">{item.year}</p>
              <div>
                <div>
                  <h2 className="project-title">
                    {item.project}
                    {(item.link || item.linl) && (
                      <a
                        className="proj_link"
                        href={item.link || item.linl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-external-link">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </h2>
                </div>
                <p>{item.role}</p>

                <p>{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
