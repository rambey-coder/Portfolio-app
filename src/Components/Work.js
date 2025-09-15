import React from "react";
import "./Work.css";

const Work = () => {
  const exp = [
    {
      year: "2023-2025",
      project: "Techbeaver",
      role: "Full-time Frontend and Mobile Developer",
      info: "Collaborated on a team to build and maintain a suite of web and mobile applications. I worked closely with cross-functional teams to translate designs into robust, responsive user interfaces and ensured a seamless user experience across multiple devices.",
    },
    {
      year: "2022-2023",
      project: "Finosell",
      role: "Contract Front-End Developer",
      info: "Participated in daily stand-ups and code reviews to maintain and improve the quality of the codebase for a financial technology product. My responsibilities included translating user interfaces and implementing designs that were intuitive, aesthetically pleasing, and responsive across various screen sizes.",
    },
    {
      year: "2024-2025",
      project: "Vision Total (LVT)",
      role: "Freelance Front-End Developer",
      info: "Designed, developed, and maintained a web application for real-time voice calling. This project utilized the **RingCentral Call SDK** and an AI model for accent conversion, ensuring smooth and clear communication. I also integrated an AI-powered document processing feature using the **OpenAI API** to automate data extraction from documents.",
    },
    {
      year: "2024-2025",
      project: "Sangabooks",
      role: "Contract Front-End Developer",
      info: "Developed an AI-powered financial application that integrated the **Plaid API** to provide users with in-depth financial insights. The application allowed for secure account linking and data analysis, giving users a comprehensive view of their finances.",
    },
    {
      year: "2025-2025",
      project: "Farm Data Management System",
      role: "Freelance Front-End and Mobile Developer",
      info: "Developed a comprehensive mobile application for farmers and a complementary web application for administrative users. I implemented real-time data synchronization to ensure that agricultural data was always up-to-date across all platforms. The project focused on building a seamless and efficient system for managing farm data.",
    },
    {
      year: "2025-2025",
      project: "Olive Option (Cryptionary)",
      role: "Freelance Front-End Developer",
      info: "Designed and developed the user interface for a cryptocurrency trading platform dashboard. My work included integrating **crypto wallet functionality** and creating a clean, intuitive layout that made it easy for users to track their assets and trades.",
    },
    {
      year: "2024-2025",
      project: "Info Payroll",
      role: "Freelance Front-End Developer",
      info: "Developed a full-fledged payroll and invoice automation system. I was responsible for creating a user-friendly interface that streamlined the process of generating payroll, sending invoices, and managing billing records.",
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
                <h2>{item.project}</h2>
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
