import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "material-icons/iconfont/material-icons.css";

const AboutMePage = () => {
  return (
    <div className="about-me-page">
      <Header />

      <section className="about-me text-center my-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="profile-image mx-auto">
                <Image
                  src="/assets/Image.jpg"
                  alt="Mi Foto de Perfil"
                  fluid
                  roundedCircle
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="about-content">
                <h1 className="display-4">Acerca de Mí</h1>
                <p className="lead">
                  ¡Hola! Soy Sebastian Benavides Heins, un apasionado
                  desarrollador web full stack con experiencia en el stack MERN.
                  Mi objetivo es crear experiencias web atractivas y funcionales
                  que impacten positivamente a los usuarios.
                </p>
                <p>
                  En mi carrera, he tenido el privilegio de trabajar en
                  proyectos emocionantes como º.
                  Disfruto resolviendo problemas y explorando nuevas
                  tecnologías.
                </p>
                <p>
                  Aparte de la programación, me encanta [Tus Intereses o
                  Pasatiempos]. Creo que estas actividades me ayudan a mantener
                  un equilibrio y a ser un desarrollador más creativo.
                </p>
                <p className="text-muted">
                  ¡Gracias por visitar mi página! Si tienes alguna pregunta o
                  deseas contactarme, no dudes en escribirme a{" "}
                  <a href="mailto:sebasheins@gmail.com">sebasheins@gmail.com</a>
                  .
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="skills text-center my-5">
        <Container>
          <h2>Habilidades</h2>
          <Row>
            <Col>
              <ul className="list-unstyled">
                <li>
                  <i className="material-icons">code</i> HTML
                </li>
                <li>
                  <i className="material-icons">palette</i> CSS
                </li>
                <li>
                  <i className="material-icons">language</i> JavaScript
                </li>
                <li>
                  <i className="material-icons">web</i> React
                </li>
                <li>
                  <i className="material-icons">code</i> Node.js
                </li>
                <li>
                  <i className="material-icons">code</i> Express.js
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="list-unstyled">
                <li>
                  <i className="material-icons">web</i> Bootstrap
                </li>
                <li>
                  <i className="material-icons">code</i> Git
                </li>
                <li>
                  <i className="material-icons">code</i> GitHub
                </li>
                <li>
                  <i className="material-icons">brush</i> Figma
                </li>
                <li>
                  <i className="material-icons">web</i> Trello
                </li>
                <li>
                  <i className="material-icons">apps</i> Docker
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="list-unstyled">
                <li>
                  <i className="material-icons">database</i> MySQL
                </li>
                <li>
                  <i className="material-icons">web</i> MongoDB
                </li>
                <li>
                  <i className="material-icons">check</i> Jest
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials my-5">
        <Container>
          <h2>Testimonios</h2>
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <blockquote className="blockquote">
                    <p className="mb-0">
                      "Sebastian es un desarrollador altamente talentoso y
                      comprometido..."
                    </p>
                    <footer className="blockquote-footer">
                      - Nombre del Cliente
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <blockquote className="blockquote">
                    <p className="mb-0">
                      "Recomiendo encarecidamente a Sebastian. Su trabajo es
                      excepcional..."
                    </p>
                    <footer className="blockquote-footer">
                      - Nombre del Colega
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Agrega más testimonios o recomendaciones según corresponda */}
        </Container>
      </section>

      <section className="education-certifications my-5">
        <Container>
          <h2>Educación y Certificaciones</h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                Titulo en Desarrollo de Software - Universidad XYZ
              </Card.Title>
              <Card.Text>Año de Graduación: 20XX</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                Certificación en Desarrollo Web Full Stack - Plataforma ABC
              </Card.Title>
              <Card.Text>Fecha de Certificación: MM/AAAA</Card.Text>
            </Card.Body>
          </Card>
          {/* Agrega más detalles sobre tu educación y certificaciones */}
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMePage;
