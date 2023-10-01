import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [scrollToTop, setScrollToTop] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClosePrivacyPolicy = () => {
    setShowPrivacyPolicy(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollToTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const customStyles = {
    icon: {
      color: "#FFFFFF",
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} Sebastian Benavides Heins |{" "}
              <Button variant="link" style={{ color: "#FB5B21",}} onClick={() => setShowPrivacyPolicy(true)}>
              {t("Policy1")}
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
      <button
        className="scroll-to-top"
        style={customStyles.button}
        onClick={handleScrollToTop}
      >
        <FontAwesomeIcon icon={faAngleUp} style={customStyles.icon} />
      </button>
      <PrivacyPolicyModal show={showPrivacyPolicy} handleClose={handleClosePrivacyPolicy} />

    </footer>
  );
};

export default Footer;
