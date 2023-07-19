import React from "react";
import banner from "../banner.jpeg";
function Header() {
    return (
    <div className="header-image-wrapper">
        <img src={banner} className="headeer-image img-fluid" alt="Logo"/>
      </div>
    );
  }
  
  export default Header;