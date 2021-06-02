import React,{useEffect} from "react";
import { useSelector } from "react-redux";
// import { addToCart } from "../redux/actions/productaction";
import "./Header.css"
const Header = () => {
  const cartitem=useSelector((state) => state.cart);
  useEffect(()=>{
    console.log(cartitem.length);

  },[cartitem]);
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
        <div>
          <img scr="../images/cart.png" alt="Cart"/>
        </div>
        {cartitem.length}
      </div>
  );
};

export default Header;