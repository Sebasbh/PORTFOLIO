import React from "react";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import "../index.css"; 

function Home() {

  const Style = {

    fontFamily: "'Oswald', sans-serif, 'Staatliches', cursive"
  };
    return (
      <div style={Style}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default Home;
  
