import React from "react";
import "./Header.css"
const Header = () => {
  return (  
      <div className="header"> 
        <div className="shopname">
          <h5>vikijaishop</h5>
        </div>
        <div className="input">
          <input className="inputtext" type="text"/>
        </div>
        <div className="login">
          <p className="logintext">hello vignesh</p>
        </div>

      </div>
  );
};

export default Header;