import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Stack() {
  const [activeTab, setActiveTab] = useState("tab-1");
  const { t } = useTranslation();

  const customStyles = {
    container: {
      backgroundColor: "#222429",
      color: "#222429",
      padding: "20px",
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
      padding: "10px 0",
      margin: "10px",
    },
    navLink: {
      color: "#000",
      textDecoration: "none",
      margin: "0 15px",
      padding: "10px 20px",
      borderRadius: "10px",
      transition: "background-color 0.3s",
    },
    navLinkActive: {
      backgroundColor: "#FB5B21 ",
      borderRadius: "10px ",
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
    },
  };

  const renderTechList = (techArray) => {
    return techArray.map((tech, index) => (
      <div key={index} className="col-lg-3 col-md-3 col-sm-6">
        <div style={customStyles.techItem}>
          <h6 style={{ margin: "0" }}>{tech}</h6>
        </div>
      </div>
    ));
  };

  return (
    <div className="container-fluid" style={customStyles.container}>
      <div className="text-center">
        <h1 style={customStyles.title}>{t("stack")}</h1>
      </div>
      <ul className="nav nav-pills d-inline-flex" style={customStyles.nav}>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill ${
              activeTab === "tab-1" ? "active" : ""
            }`}
            data-bs-toggle="pill"
            href="#tab-1"
            style={
              activeTab === "tab-1"
                ? customStyles.navLinkActive
                : customStyles.navLink
            }
            onClick={() => setActiveTab("tab-1")}
          >
            {t("keyLanguagesAndTechnologies")}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill ${
              activeTab === "tab-2" ? "active" : ""
            }`}
            data-bs-toggle="pill"
            href="#tab-2"
            style={
              activeTab === "tab-2"
                ? customStyles.navLinkActive
                : customStyles.navLink
            }
            onClick={() => setActiveTab("tab-2")}
          >
            
            {t("keyDesignAndUIToolsAndFrameworks")}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill ${
              activeTab === "tab-3" ? "active" : ""
            }`}
            data-bs-toggle="pill"
            href="#tab-3"
            style={
              activeTab === "tab-3"
                ? customStyles.navLinkActive
                : customStyles.navLink
            }
            onClick={() => setActiveTab("tab-3")}
          >
            {t("keyVersionControlAndCollaboration")}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill ${
              activeTab === "tab-4" ? "active" : ""
            }`}
            data-bs-toggle="pill"
            href="#tab-4"
            style={
              activeTab === "tab-4"
                ? customStyles.navLinkActive
                : customStyles.navLink
            }
            onClick={() => setActiveTab("tab-4")}
          >
            {t("keyProjectManagement")}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill ${
              activeTab === "tab-5" ? "active" : ""
            }`}
            data-bs-toggle="pill"
            href="#tab-5"
            style={
              activeTab === "tab-5"
                ? customStyles.navLinkActive
                : customStyles.navLink
            }
            onClick={() => setActiveTab("tab-5")}
          >
            {t("keyTestingAndCodeQuality")}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill ${
              activeTab === "tab-6" ? "active" : ""
            }`}
            data-bs-toggle="pill"
            href="#tab-6"
            style={
              activeTab === "tab-6"
                ? customStyles.navLinkActive
                : customStyles.navLink
            }
            onClick={() => setActiveTab("tab-6")}
          >
            {t("keyContainersAndDeployment")}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill ${
              activeTab === "tab-7" ? "active" : ""
            }`}
            data-bs-toggle="pill"
            href="#tab-7"
            style={
              activeTab === "tab-7"
                ? customStyles.navLinkActive
                : customStyles.navLink
            }
            onClick={() => setActiveTab("tab-7")}
          >
            
            {t("keyDatabaseManagement")}
          </a>
        </li>
      </ul>
      <div className="tab-content  mt-5" style={customStyles.tabContent}>
        <div
          id="tab-1"
          className={`tab-pane fade  ${
            activeTab === "tab-1" ? "show active" : ""
          }`}
        >
          <div className="row g-4">
            {renderTechList([
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express.js",
            ])}
          </div>
        </div>
        <div
          id="tab-2"
          className={`tab-pane fade ${
            activeTab === "tab-2" ? "show active" : ""
          }`}
        >
          <div className="row g-4">
            {renderTechList([
              "Materialize",
              "Material-UI",
              "Bootstrap",
              "Figma",
            ])}
          </div>
        </div>
        <div
          id="tab-3"
          className={`tab-pane fade ${
            activeTab === "tab-3" ? "show active" : ""
          }`}
        >
          <div className="row g-4">{renderTechList(["Git", "GitHub"])}</div>
        </div>
        <div
          id="tab-4"
          className={`tab-pane fade ${
            activeTab === "tab-4" ? "show active" : ""
          }`}
        >
          <div className="row g-4">{renderTechList(["Trello"])}</div>
        </div>
        <div
          id="tab-5"
          className={`tab-pane fade ${
            activeTab === "tab-5" ? "show active" : ""
          }`}
        >
          <div className="row g-4">{renderTechList(["Jest"])}</div>
        </div>
        <div
          id="tab-6"
          className={`tab-pane fade ${
            activeTab === "tab-6" ? "show active" : ""
          }`}
        >
          <div className="row g-4">{renderTechList(["Docker"])}</div>
        </div>
        <div
          id="tab-7"
          className={`tab-pane fade ${
            activeTab === "tab-7" ? "show active" : ""
          }`}
        >
          <div className="row g-4">{renderTechList(["MySQL", "MongoDB"])}</div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
