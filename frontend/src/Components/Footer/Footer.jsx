import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const customStyles = {
    icon: {
      color: "#FB5B21",
    },
  };

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Sebastian Benavides Heins</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center d-flex justify-content-end ">
            <button
              className={`scroll-to-top ${scrollToTop ? 'visible' : ''}`}
              onClick={handleScrollToTop}
            >
              <FontAwesomeIcon icon={faArrowUp} style={customStyles.icon} />
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
