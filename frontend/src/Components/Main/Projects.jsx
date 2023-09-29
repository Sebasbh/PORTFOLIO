import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Stack({ name, imageSrc, githubLink, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const Styles = {
    Card: {
      borderColor: "#FB5B21",
    },
  };

  return (
    <div className="col-lg-4 col-md-6">
      <div className="project-card" style={Styles.Card}>
        <div className="project-image">
          <img className="img-fluid" src={imageSrc} alt={name} />
        </div>
        <div className="project-details">
          <h3 className="project-title">{name}</h3>
          <div className="project-links">
            <a
              className="btn btn-light rounded-circle"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <button className="btn btn-light" onClick={toggleDropdown}>
              {isOpen ? "Close" : "Details"}
            </button>
          </div>
          {isOpen && (
            <div className="project-description">
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const stack = [
    {
      name: "Ciberguard",
      imageSrc: "/assets/Projects/CyberGuard.png",
      githubLink: "https://github.com/Sebasbh/CyberGuard",
      description: 
      "CyberGuard (Secure Development Practice) project aims to enhance the security of forms on the rovikron.web.app website. This is achieved by implementing security measures on the client side, such as ReCaptcha and data validation, and on the server side, by preventing OWASP vulnerabilities like XSS and SQL Injection. Modern technology is employed, and best practices in secure development are followed.",
    },
    {
      name: "Bama Proyect",
      imageSrc: "/assets/Projects/Bama.png",
      githubLink: "https://github.com/Sebasbh/BamaProyect",
      description: 
      "Facturación-BAMA is a project to create an application for managing clients, orders, delivery notes, and invoices. It allows for the registration and control of these transactions while establishing relationships between them. The application includes lists of invoices, delivery notes, and orders, along with a control panel featuring financial tracking graphs.",
    },
    {
      name: "DroneTech",
      imageSrc: "/assets/Projects/DroneTech.png",
      githubLink: "https://github.com/Sebasbh/dronereact",
      description:
      "This project is a website designed for the sale of drones, featuring a range of functionalities that enhance the purchasing experience and provide an intuitive interaction for users. The website is fully responsive, which means it adapts to different devices such as mobile phones, tablets, and desktop computers.",
    },
  ];

  const customStyles = {
    container: {
      fontFamily: "Rubik, sans-serif",
      padding: "30px",
    },
  };

  return (
    <div>
      <div className="container-fluid" style={customStyles.container}>
        <div className="text-center">
          <h1 className="display-3 mb-5">Main Projects</h1>
        </div>
        <div className="row g-4">
          {stack.map((project, index) => (
            <Stack
              key={index}
              name={project.name}
              imageSrc={project.imageSrc}
              githubLink={project.githubLink}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
