import React from 'react';
import { useTranslation } from "react-i18next";


function Cards() {
  const { t } = useTranslation();
  const style = {
    color: "#222429",
  };

  const cardStyle = {
    backgroundColor: "#FB5B21",
    width: "100%", 
    height: "30vh", 
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <div className="container" style={style}>
      <div className="row justify-content-center my-5">
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={cardStyle}>
            <div className="card-body">
              <i className="flaticon-six-pack display-4 text-white mb-4"></i>
              <h3 className="card-title">{t("card1")}</h3>
              <p className="card-text text-white">
                {t("card1.1")}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={cardStyle}>
            <div className="card-body">
              <i className="flaticon-barbell display-4 text-white mb-4"></i>
              <h3 className="card-title">{t("card2")}</h3>
              <p className="card-text text-white">
              {t("card2.1")}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={cardStyle}>
            <div className="card-body">
              <i className="flaticon-bodybuilding display-4 text-white mb-4"></i>
              <h3 className="card-title">{t("card3")}</h3>
              <p className="card-text text-white">
              {t("card3.1")}              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
