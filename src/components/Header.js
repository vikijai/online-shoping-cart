import React from "react";
import { useSelector } from "react-redux";
// import { addToCart } from "../redux/actions/productaction";
import {Icon} from "semantic-ui-react";
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
  const cartitem=useSelector((state) => state.cart);
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
        <Link to={`/cart`}>
          <div className="icon">
          <Icon className="shopping cart" /> 
          {cartitem.length}
          </div>
        </Link>
      </div>
  );
};

export default Header;