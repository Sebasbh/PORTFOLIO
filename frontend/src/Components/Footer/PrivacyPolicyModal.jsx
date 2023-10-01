import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

const PrivacyPolicyModal = ({ show, handleClose }) => {
  const { t } = useTranslation();
  const modalStyle = {
    backgroundColor: "rgba(244, 245, 248, 0.8)", // Fondo del modal con transparencia
    color: "#222429", // Color del texto
    backdropFilter: "blur(5px)", // Agregar un efecto de desenfoque al fondo
    display: "flex",
    alignItems: "center", // Centrar verticalmente
    justifyContent: "center", // Centrar horizontalmente
  };

  const closeButtonStyle = {
    backgroundColor: "#BDBDBF", // Fondo del botón Cerrar
    borderColor: "#BDBDBF", // Borde del botón Cerrar
  };

  return (
    <Modal show={show} onHide={handleClose} style={modalStyle}>
      <Modal.Header closeButton style={modalStyle}>
        <Modal.Title>{t("Policy1")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <header>
          <h1>{t("Policy1")}</h1>
        </header>

        <section>
          <h2>{t("Policy2")}</h2>
          <p>{t("Policy3")}</p>
        </section>

        {/* Otras secciones de la política de privacidad aquí */}

        <footer>
          <p>
            {t("Policy4")}
            <a href="/" style={{ color: "#FB5B21" }}>{t("contact")}</a>.
          </p>
        </footer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} style={closeButtonStyle}>
        {t("Close")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PrivacyPolicyModal;
