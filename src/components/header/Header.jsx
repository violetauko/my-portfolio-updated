import React from "react";
import CTA from "./CTA";
import myImage1 from "../../images/myImage1.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <h4>Hi I'm</h4>
        <h1>Violet Auko</h1>
        <h5 className="text-light">Frontend and Android developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="myImage">
          <img src={myImage1} alt="myImage" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
