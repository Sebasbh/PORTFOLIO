import React from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  NavItem,
  NavLink,
} from "react-bootstrap";

const About = () => {
  const textColor = "#FB5B21";
  const textColor1 = "#6c757d";

  const buttonStyle = {
    backgroundColor: textColor,
    color: "#FFFFFF",
    marginBottom: "50px",
  };

  return (
    <Container fluid className="p-5"id="aboutMe">
      <Row className="gx-5">
        <Col lg={5} className="mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded"
              src="/assets/Image.jpg"
              style={{ objectFit: "cover" }}
              alt="About"
            />
          </div>
        </Col>
        <Col lg={7}>
          <div className="mb-4">
            <h5 className="text-uppercase" style={{ color: textColor1 }}>
              About Me
            </h5>
            <h1
              className="display-3 text-uppercase mb-0"
              style={{ color: textColor }}
            >
              Sebastian Benavides
            </h1>
          </div>
          <h4 className="text-body mb-4" style={{ color: textColor }}>
            I am a passionate Full Stack developer with a strong interest in
            technology, characterized by curiosity and a solution-oriented
            mindset. I am organized and consistent, which makes me efficient and
            punctual. I highly value communication and commitment in teamwork.
          </h4>
          <p className="mb-4" style={{ color: textColor1 }}>
            Furthermore, my experience in karate has instilled discipline and
            tenacity in me, particularly in high-pressure situations. I am
            seeking opportunities within a dynamic company to contribute and
            continue learning in my career as a developer.
          </p>
          <div className="rounded bg-dark p-5">
            <Tab.Container id="about-tabs" defaultActiveKey="pills-1">
              <Row>
                <Col md={6}>
                  <Nav variant="pills" className="flex-column">
                    <NavItem>
                      <NavLink
                        eventKey="pills-0"
                        className="text-uppercase"
                        style={buttonStyle}
                      >
                        Education
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        eventKey="pills-1"
                        className="text-uppercase"
                        style={buttonStyle}
                      >
                        Experience
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        eventKey="pills-2"
                        className="text-uppercase"
                        style={buttonStyle}
                      >
                        MY INTERESTS
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        eventKey="pills-3"
                        className="text-uppercase"
                        style={buttonStyle}
                      >
                        MY PROFESSIONAL GOALS
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>

                <Col md={6}>
                  <Tab.Content>
                    <Tab.Pane eventKey="pills-0">
                      <h5
                        className="text-uppercase"
                        style={{ color: textColor }}
                      >
                        Education
                      </h5>

                      <p
                        className="text-secondary mb-0"
                        style={{ color: textColor }}
                      >
                        <p
                          className="text-secondary mb-0"
                          style={{ color: textColor }}
                        >
                          2023 - F5-FUNDACION TOMILLO (Madrid)
                          <br />
                          - Cybersecurity Course (Hours: 250)
                          <br />
                          <br />
                          2023 - F5-FUNDACION TOMILLO (Madrid)
                          <br />- Full Stack Web Development Bootcamp (Hours:
                          850)
                        </p>
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="pills-1">
                      <h5
                        className="text-uppercase"
                        style={{ color: textColor }}
                      >
                        Experience
                      </h5>
                      <p
                        className="text-secondary mb-0"
                        style={{ color: textColor }}
                      >
                        <p
                          className="text-secondary mb-0"
                          style={{ color: textColor }}
                        >
                          Bama Sistemas
                          <br />
                          Madrid, Spain - 2023
                          <br />
                          - Support in technical design by analyzing the
                          technical requirements of the application.
                          <br />
                          - Assist in the integration of technical components
                          and applications to meet business requirements.
                          <br />
                          - Conduct unit tests and participate in integration
                          testing.
                          <br />
                          - Maintain, adjust, and repair applications to ensure
                          their performance aligns with technical and functional
                          specifications.
                          <br />
                          - Document and provide training and user support.
                          <br />
                          <br />
                          Somos F5 y Thoughtworks
                          <br />
                          Madrid, Spain - 2023
                          <br />
                          - Full Stack Developer in an e-commerce hackathon,
                          enhancing UX, search, and security.
                          <br />
                          - Designed functionalities, scalability, database
                          architecture, and RESTful API.
                          <br />- Proficient in problem-solving under pressure.
                        </p>
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="pills-2">
                      <h5
                        className="text-uppercase"
                        style={{ color: textColor }}
                      >
                        My Interests
                      </h5>
                      <p
                        className="text-secondary mb-0"
                        style={{ color: textColor }}
                      >
                        Outside of my work as a Full Stack developer, I have a
                        wide range of interests that keep me motivated and
                        well-rounded. Here are a few things I'm passionate
                        about:
                        <ul>
                          <li>
                            Technology and Innovation: I'm always exploring the
                            latest trends and innovations in the tech world.
                            Whether it's artificial intelligence, blockchain, or
                            the latest gadgets, I'm eager to learn and stay
                            updated.
                          </li>
                          <li>
                            Teamwork and Collaboration: Collaboration is a key
                            aspect of my work, and I apply the principles I've
                            learned in karate to build strong, communicative
                            teams. I believe that great teamwork is the
                            foundation of success.
                          </li>
                          <li>
                            Continuous Learning: I'm a strong believer in
                            lifelong learning. Whether it's picking up a new
                            programming language or diving into a
                            non-tech-related subject, I'm always seeking
                            opportunities to expand my knowledge and skills.
                          </li>
                        </ul>
                        Feel free to reach out if you share any of these
                        interests or if you'd like to connect and discuss
                        potential collaborations or opportunities. I'm excited
                        to engage with like-minded individuals and
                        organizations.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-3">
                      <h5
                        className="text-uppercase"
                        style={{ color: textColor }}
                      >
                        My Professional Goals
                      </h5>
                      <p
                        className="text-secondary mb-0"
                        style={{ color: textColor }}
                      >
                        While I won't delve into specific projects in this tab,
                        I'd like to share a bit about my career goals and focus
                        as a Full Stack developer.
                        <ul>
                          <li>
                            <strong>Continuous Learning:</strong> My primary
                            goal is to keep learning and growing in the world of
                            technology. I'm committed to the constant
                            improvement of my skills and knowledge in web
                            development and related areas.
                          </li>
                          <li>
                            <strong>Collaboration:</strong> Valuing
                            collaboration and teamwork, I seek opportunities to
                            work with individuals who are passionate about
                            technology and innovation. I believe that together
                            we can achieve remarkable things.
                          </li>
                          <li>
                            <strong>Innovation:</strong> I'm passionate about
                            technological innovation and aspire to be part of
                            projects and teams at the forefront of creating
                            innovative solutions for current challenges.
                          </li>
                        </ul>
                        If you share these interests or have collaboration
                        opportunities that align with my goals, I'd be delighted
                        to have a conversation with you.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
