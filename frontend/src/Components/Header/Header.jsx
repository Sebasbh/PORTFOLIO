import React from "react";
import { Navbar, Container, Button, Nav, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const orangeColor = "#FB5B21";
  const white = "#FFFFFF";

  const developerTextStyle = {
    color: orangeColor,
    textTransform: "uppercase",
    marginLeft: "23px",
  };

  const homeLinkStyle = {
    color: orangeColor,
  };

  const buttonStyle = {
    backgroundColor: orangeColor,
    color: "white",
  };

  const buttonStyle2 = {
    backgroundColor: white,
    color: "#BDBDBF",
    margin: "10px",
  };

  const headerStyle = {
    position: "fixed",
    width: "100%", 
    zIndex: 1000,
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const greyColor = "#BDBDBF"
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
            <Image src="/assets/Logo.png" alt="Logo" width={70} className="mr-3" />

            {/* Developer Name */}
            <h2 className="m-0 display-5" style={developerTextStyle}>
              My portfolio
            </h2>
          </a>
        </div>
        <div className="col-lg-9">
          {/* Contact Info and Social Icons */}
          <div className="row gx-0  d-none d-lg-flex"style={{ backgroundColor: greyColor}}   >
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: orangeColor }} className=" me-2" />
                <h6 className="mb-0">sebasheins@gmail.com</h6>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <FontAwesomeIcon icon={faPhone} style={{ color: orangeColor }} className="me-2" />
                <h6 className="mb-0">+34 609 151049</h6>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a className="btn btn-light btn-square rounded-circle me-2" target="_blank" href="https://www.linkedin.com/in/sebastian-benavides-heins/">
                  <FontAwesomeIcon icon={faLinkedin} style={{ color: orangeColor }} />
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2" target="_blank" href="https://github.com/Sebasbh">
                  <FontAwesomeIcon icon={faGithub} style={{ color: orangeColor }} />
                </a>
              </div>
            </div>
          </div>
          {/* Navigation Menu and Home Button */}
          <Navbar expand="lg" bg="dark" variant="dark" className="p-3 p-lg-0 px-lg-5">
            <Container>
              <Navbar.Toggle aria-controls="navbarCollapse" />
              <Navbar.Collapse id="navbarCollapse">
                <Nav className="mr-auto py-0">
                <Nav.Link onClick={() => scrollToSection("about")}>About Me</Nav.Link>
                <Nav.Link onClick={() => scrollToSection("stack")}>My Stack</Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("projects")}>My Projects</Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("contact")}>Contact Me</Nav.Link>
                </Nav>
                <Button href="#" className="btn py-md-2 px-md-4" style={{ ...buttonStyle2 }} variant="outline-secondary">
                    Curriculum Vitae
                </Button>

              </Navbar.Collapse>
            </Container>
            <Button href="#" className="btn py-md-2 px-md-5" style={{ ...buttonStyle, float: "right" }} variant="outline-secondary">
              Login
            </Button>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Header;
