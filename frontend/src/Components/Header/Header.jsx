import React from "react";
import { Navbar, Container, Button, Nav, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next"; 
import LanguageSwitcher from "./LanguageSwitcher";


function Header() {
  const { t } = useTranslation();

  const orangeColor = "#FB5B21";
  const white = "#FFFFFF";

  const developerTextStyle = {
    color: orangeColor,
    textTransform: "uppercase",
    marginLeft: "23px",
  };

  const buttonStyle = {
    backgroundColor: orangeColor,
    color: "white",
  };

  const buttonStyle2 = {
    backgroundColor: white,
    color: "#BDBDBF",
    margin: "20px",
  };

  const headerStyle = {
    position: "fixed",
    width: "100%",
    zIndex: 1000
  };
  ;
  
  const greyColor = "#BDBDBF";

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    };

  return (
    <div className="container-fluid bg-dark px-0" style={headerStyle}>
      <div className="row gx-0">
        {/* Logo and Developer Name */}
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a
            href="/"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            {/* Logo */}
            <Image
              src="/assets/Logo.png"
              alt="Logo"
              width={70}
              className="mr-3"
            />

            {/* Developer Name */}
            <h2 className="m-0 display-5" style={developerTextStyle}>
             {t('developerName')}
            </h2>
          </a>
        </div>
        <div className="col-lg-9">
          {/* Contact Info and Social Icons */}
          <div
            className="row gx-0  d-none d-lg-flex"
            style={{ backgroundColor: greyColor }}
          >
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: orangeColor }}
                  className=" me-2"
                />
                <h6 className="mb-0">sebasheins@gmail.com</h6>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: orangeColor }}
                  className="me-2"
                />
                <h6 className="mb-0">+34 609 151049</h6>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a
                  className="btn btn-light btn-square rounded-circle me-2"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sebastian-benavides-heins/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: orangeColor }}
                  />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle me-2"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Sebasbh"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: orangeColor }}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Navigation Menu and Home Button */}
          <Navbar
            expand="lg"
            bg="dark"
            variant="dark"
            className="p-3 p-lg-0 px-lg-5"
          >
            <Container>
              <Navbar.Toggle aria-controls="navbarCollapse" />
              <Navbar.Collapse id="navbarCollapse">
                <Nav className="mr-auto py-0">
                  <Nav.Link onClick={() => scrollToSection("about")}>
                  {t('about')}
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("stack")}>
                  {t('stack')}
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("projects")}>
                  {t('projects')}
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("contact")}>
                  {t('contact')}
                  </Nav.Link>
                </Nav>
                <Button
                  href="/assets/Curriculums/Curriculum Vitae (EN).pdf" // Reemplaza esta URL con la ubicación real de tu CV
                  target="_blank"
                  className=" py-md-2 px-md-4"
                  style={{ ...buttonStyle2 }}
                  variant="outline-secondary"
                  download="Curriculum Vitae (EN).pdf" // Nombre del archivo que se descargará
                >
                  {t('curriculum')}
                </Button>
              </Navbar.Collapse>
            </Container>
            <LanguageSwitcher/>
            <Button
              href="#"
              className="btn py-md-2 px-md-5"
              style={{ ...buttonStyle, float: "right", marginLeft: "10px" }}
              variant="outline-secondary"
            >
              {t('login')}
            </Button>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Header;
