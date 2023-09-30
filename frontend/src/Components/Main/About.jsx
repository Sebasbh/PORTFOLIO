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
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const textColor = "#FB5B21";
  const textColor1 = "#6c757d";

  const buttonStyle = {
    backgroundColor: textColor,
    color: "#FFFFFF",
    marginBottom: "50px",
  };

  return (
    <Container fluid className="p-5" id="aboutMe">
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
              {t("about")}
            </h5>
            <h1
              className="display-3 text-uppercase mb-0"
              style={{ color: textColor }}
            >
              Sebastian Benavides
            </h1>
          </div>
          <h4 className="text-body mb-4" style={{ color: textColor }}>
            {t("text1")}
          </h4>
          <p className="mb-4" style={{ color: textColor1 }}>
            {t("text2")}
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
                        {t("education")}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        eventKey="pills-1"
                        className="text-uppercase"
                        style={buttonStyle}
                      >
                        {t("experience")}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        eventKey="pills-2"
                        className="text-uppercase"
                        style={buttonStyle}
                      >
                        {t("interests")}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        eventKey="pills-3"
                        className="text-uppercase"
                        style={buttonStyle}
                      >
                        {t("goals")}
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
                        {t("education")}
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
                          <br />- {t("course1")}
                          <br />
                          <br />
                          2023 - F5-FUNDACION TOMILLO (Madrid)
                          <br />- {t("course2")}
                        </p>
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="pills-1">
                      <h5
                        className="text-uppercase"
                        style={{ color: textColor }}
                      >
                        {t("experience")}
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
                          <br />- {t("experience1.1")}
                          <br />- {t("experience1.2")}
                          <br />- {t("experience1.3")}
                          <br />- {t("experience1.4")}
                          <br />- {t("experience1.5")}
                          <br />
                          <br />
                          Somos F5 y Thoughtworks
                          <br />
                          Madrid, Spain - 2023
                          <br />- {t("experience2.1")}
                          <br />- {t("experience2.2")}
                          <br />- {t("experience2.3")}
                        </p>
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="pills-2">
                      <h5
                        className="text-uppercase"
                        style={{ color: textColor }}
                      >
                        {t("interests")}
                      </h5>
                      <p
                        className="text-secondary mb-0"
                        style={{ color: textColor }}
                      >
                        <p>{t("interests0")}</p>
                        <ul>
                          <li>{t("interests1")}</li>
                          <li>{t("interests2")}</li>
                          <li>{t("interests3")}</li>
                        </ul>
                        <p>{t("interests4")}</p>
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-3">
                      <h5
                        className="text-uppercase"
                        style={{ color: textColor }}
                      >
                        {t("goals")}
                      </h5>
                      <p
                        className="text-secondary mb-0"
                        style={{ color: textColor }}
                      >
                        {t("careerGoals")}
                        <ul>
                          <li>
                            <strong>{t("careerGoal1.title")}</strong>{" "}
                            {t("careerGoal1.description")}
                          </li>
                          <li>
                            <strong>{t("careerGoal2.title")}</strong>{" "}
                            {t("careerGoal2.description")}
                          </li>
                          <li>
                            <strong>{t("careerGoal3.title")}</strong>{" "}
                            {t("careerGoal3.description")}
                          </li>
                        </ul>
                        <p>{t("careerContact")}</p>
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
