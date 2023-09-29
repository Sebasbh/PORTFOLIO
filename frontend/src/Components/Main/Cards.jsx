import React from 'react';

function Cards() {
  const style = {
    color: "#222429",
  };

  const cardStyle = {
    backgroundColor: "#FB5B21",
    width: "100%", // Ancho fijo para las cartas
    height: "20vh", // Alto fijo para las cartas
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
              <h3 className="card-title">Frontend Development</h3>
              <p className="card-text text-white">
                I specialize in Frontend Development, creating user-friendly and responsive web interfaces to enhance the user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={cardStyle}>
            <div className="card-body">
              <i className="flaticon-barbell display-4 text-white mb-4"></i>
              <h3 className="card-title">Backend Development</h3>
              <p className="card-text text-white">
                I excel in Backend Development, building robust server-side applications to handle data and logic efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={cardStyle}>
            <div className="card-body">
              <i className="flaticon-bodybuilding display-4 text-white mb-4"></i>
              <h3 className="card-title">Cybersecurity</h3>
              <p className="card-text text-white">
                My expertise includes Cybersecurity, safeguarding digital systems and data from potential threats and vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
