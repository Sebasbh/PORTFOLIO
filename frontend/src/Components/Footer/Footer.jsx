import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const customStyles = {
    icon: {
      color: "#FFFF",
      fontSize: "24px",
    },
    button: {
      display: scrollToTop ? "block" : "none",
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#FB5B21",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Sebastian Benavides Heins
            </p>
          </Col>
        </Row>
      </Container>
      <button
        className="scroll-to-top"
        style={customStyles.button}
        onClick={handleScrollToTop}
      >
        <FontAwesomeIcon icon={faAnglesUp} style={customStyles.icon}  />
      </button>
    </footer>
  );
}

export default Footer;
