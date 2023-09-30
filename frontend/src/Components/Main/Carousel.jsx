import React from "react";
import { useTranslation } from "react-i18next";

const captionStyle = {
  color: "#FB5B21", // Color de texto
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%", // Ajustar la altura para centrar verticalmente
};

const h5Style = {
  fontSize: "24px", // Tamaño del texto
};

const h1Style = {
  fontSize: "48px", // Tamaño del texto
};

function Carousel() {
  const { t } = useTranslation();
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
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="w-100"
              src="/assets/Image2.jpg"
              alt="A beautiful landscape"
              style={{ height: "1000px",  filter: "blur(2px)"  }}
            />
            <div className="carousel-caption" style={captionStyle}>
              <div className="p-3" style={{ maxWidth: "1000px" }}>
                <h5 className="text-white text-uppercase" style={h5Style}>
                  {t("developerName")}
                </h5>
                <h1
                  className="display-2 text-uppercase mb-md-4"
                  style={h1Style}
                >
                  {t("title")}
                </h1>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a
                  className="btn btn-light py-md-3 px-md-5"
                  onClick={() => scrollToSection("contact")}
                  role="button"
                >
                  {t("contact")}
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="w-100"
              src="/assets/mainfoto.png"
              alt="A beautiful landscape"
              style={{ height: "1000px", filter: "blur(2px)"}}
            />

            <div className="carousel-caption" style={captionStyle}>
              <div className="p-3" style={{ maxWidth: "1000px" }}>
                <h5 className="text-white text-uppercase" style={h5Style}>
                  {t("developerName")}
                </h5>
                <h1
                  className="display-2 text-uppercase mb-md-4"
                  style={h1Style}
                >
                  I am a Full Stack developer
                </h1>
                <a
                  className="btn btn-light py-md-3 px-md-5"
                  onClick={() => scrollToSection("contact")}
                  role="button"
                >
                  {t("contact")}
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
