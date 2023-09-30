import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGit, faGithub, faDocker, faBootstrap, faTrello, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer, faPalette, faIndustry, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  container: {
    backgroundColor: "#222429",
    color: "#222429",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    color: "#FB5B21",
  },
  nav: {
    backgroundColor: "#FFF",
    color: "#000",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    padding: "10px 10px",
    margin: "10px",
  },
  navLink: {
    color: "#000",
    textDecoration: "none",
    margin: "0 15px",
    padding: "10px 10px",
    borderRadius: "10px",
    transition: "background-color 0.3s",
  },
  navLinkActive: {
    backgroundColor: "#FB5B21",
    borderRadius: "5px",
  },
  tabContent: {
    padding: "10px",
  },
  techItem: {
    backgroundColor: "#FFF",
    color: "#222429",
    padding: "20px",
    borderRadius: "5px",
    margin: "10px",
    textAlign: "center",
    width: "150px",
  },
};

const techIcons = {
  HTML: faHtml5,
  CSS: faCss3,
  JavaScript: faJs,
  React: faReact,
  "Node.js": faNodeJs,
  Git: faGit,
  GitHub: faGithub,
  Docker: faDocker,
  Trello: faTrello,
  Jest: faCheckSquare,
  MySQL: faDatabase,
  MongoDB: faDatabase,
  "Express.js": faServer,
  Materialize: faPalette,
  "Material-UI": faIndustry,
  Bootstrap: faBootstrap,
  Figma: faFigma,
};

function Stack() {
  const [activeTab, setActiveTab] = useState("tab-1");
  const { t } = useTranslation();

  const tabs = [
    {
      id: "tab-1",
      label: "keyLanguagesAndTechnologies",
      techList: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"],
    },
    {
      id: "tab-2",
      label: "keyDesignAndUIToolsAndFrameworks",
      techList: ["Materialize", "Material-UI", "Bootstrap", "Figma"],
    },
    {
      id: "tab-3",
      label: "keyVersionControlAndCollaboration",
      techList: ["Git", "GitHub"],
    },
    { id: "tab-4", label: "keyProjectManagement", techList: ["Trello"] },
    { id: "tab-5", label: "keyTestingAndCodeQuality", techList: ["Jest"] },
    { id: "tab-6", label: "keyContainersAndDeployment", techList: ["Docker"] },
    {
      id: "tab-7",
      label: "keyDatabaseManagement",
      techList: ["MySQL", "MongoDB"],
    },
  ];

  const renderTechList = (techArray) => {
    return techArray.map((tech, index) => (
      <div key={index} className="col-lg-3 col-md-3 col-sm-6">
        <div style={customStyles.techItem}>
          <FontAwesomeIcon icon={techIcons[tech]} size="2x" />{" "}
          {/* Tamaño del ícono */}
          <h6 style={{ margin: "0" }}>{tech}</h6>
        </div>
      </div>
    ));
  };

  return (
    <div className="container-fluid" style={customStyles.container}>
      <h1 style={customStyles.title}>{t("stack")}</h1>
      <ul className="nav nav-pills d-inline-flex" style={customStyles.nav}>
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <a
              className={`nav-link  ${
                activeTab === tab.id ? "active" : ""
              }`}
              data-bs-toggle="pill"
              href={`#${tab.id}`}
              style={
                activeTab === tab.id
                  ? customStyles.navLinkActive
                  : customStyles.navLink
              }
              onClick={() => setActiveTab(tab.id)}
            >
              {t(tab.label)}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content  mt-5" style={customStyles.tabContent}>
        {tabs.map((tab) => (
          <div
            id={tab.id}
            key={tab.id}
            className={`tab-pane fade ${
              activeTab === tab.id ? "show active" : ""
            }`}
          >
            <div className="row g-4">{renderTechList(tab.techList)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
