import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const { t } = useTranslation();

  const orangeColor = "#FB5B21";
  const whiteColor = "#FFF";
  const greyColor = "#BDBDBF";

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert(t("alert"));
      return;
    }

    const templateParams = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await emailjs.send(
        "service_4mlcvrg", // Replace with your Email.js Service ID
        "template_6ebupf9", // Replace with your Email.js Template ID
        templateParams,
        "FToI26mpXhvJO4asw"
      );
      console.log(t("successfully"), response);
      alert(t("successfully"));
    } catch (error) {
      console.error(t("Error"));
      alert(t("Error"));
    }

    e.target.reset();
  };

  return (
    <div className="container-fluid p-5" style={{ backgroundColor: greyColor }}>
      <div className="mb-5 text-center">
        <h1 className="display-3 text-uppercase mb-0">{t("contact1")}</h1>
      </div>
      <div className="row g-5 mb-5">
        {/* LinkedIn */}
        <div className="col-lg-3">
          <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
            <a
              className="btn rounded-circle d-flex align-items-center justify-content-center mb-3"
              href="https://www.linkedin.com/in/sebastian-benavides-heins/"
              target="_blank"
              rel="noreferrer"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: orangeColor,
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="fs-4 text-white" />
            </a>

            <h5 className="text-uppercase" style={{ color: whiteColor }}>
              LinkedIn
            </h5>
            <p className="text-secondary mb-0">{t("contact2")}</p>
          </div>
        </div>
        {/* GitHub */}
        <div className="col-lg-3">
          <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
            <a
              className="btn rounded-circle d-flex align-items-center justify-content-center mb-3"
              href="https://github.com/Sebasbh/"
              target="_blank"
              rel="noreferrer"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: orangeColor,
              }}
            >
              <FontAwesomeIcon icon={faGithub} className="fs-4 text-white" />
            </a>
            <h5 className="text-uppercase" style={{ color: whiteColor }}>
              GitHub
            </h5>
            <p className="text-secondary mb-0">{t("contact3")}</p>
          </div>
        </div>
        {/* Email */}
        <div className="col-lg-3">
          <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
            <a
              href="mailto:sebasheins@gmail.com"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textDecoration: "none",
              }}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: orangeColor,
                }}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fs-4 text-white"
                />
              </div>
              <h5 className="text-uppercase" style={{ color: whiteColor }}>
                Email
              </h5>
              <p className="text-secondary mb-0">sebasheins@gmail.com</p>
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="col-lg-3">
          <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: orangeColor,
              }}
            >
              <FontAwesomeIcon icon={faPhone} className="fs-4 text-white" />
            </div>
            <h5 className="text-uppercase" style={{ color: whiteColor }}>
              {t("contact4")}
            </h5>
            <p className="text-secondary mb-0">+34 609 151 049</p>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div
        className="row g-0 justify-content-center align-items-center"
        style={{ borderRadius: "10px" }}
      >
        <div className="col-lg-6">
          <div className="bg-dark p-5">
            <form onSubmit={handleEmailSubmit}>
              <div className="row g-3">
                <div className="col-6">
                  <input
                    type="text"
                    name="from_name"
                    className="form-control bg-light border-0 px-4"
                    placeholder={t("form1")}
                    style={{ height: "55px", borderRadius: "10px" }}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    name="from_email"
                    className="form-control bg-light border-0 px-4"
                    placeholder={t("form2")}
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control bg-light border-0 px-4"
                    placeholder={t("form3")}
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    className="form-control bg-light border-0 px-4 py-3"
                    rows="4"
                    placeholder={t("form4")}
                  />
                </div>
                <div className="mb-3">
                  <ReCAPTCHA
                    sitekey="6LdFrxsoAAAAAEd2JZrF6h_rMakL4FRijftbHOPz"
                    onChange={(value) => setRecaptchaValue(value)}
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn  w-100 py-3"
                    type="submit"
                    style={{ backgroundColor: orangeColor, color: whiteColor }}
                    variant="outline-secondary"
                  >
                    {t("botton")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
