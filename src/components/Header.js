import React from "react";
import { useSelector } from "react-redux";
// import { addToCart } from "../redux/actions/productaction";
import {Icon} from "semantic-ui-react";
import "./Header.css"
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { useState } from "react";
const Header = () => {
  const [username,setuser]=useState('');
  const [isLogin,setisLogin]=useState(false);
  const [photo,setphoto]=useState();
  const cartitem=useSelector((state) => state.cart);
  onsubmit=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    console.log(error)
  });
  }
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
       // console.log("Loggin in");
        setuser(user.displayName);
        setisLogin(true);
        setphoto(user.photoURL);
       // console.log(user.displayName);
      } else {
       // console.log("Loggin out");
      }
    });
 const onlogout=()=>{
      firebase.auth().signOut().then(() => {
        setisLogin(false);
      }).catch((error) => {
        // An error happened.
      });
    }
  return (  
      <div className="header"> 
        <div className="shopname">
          <h5>vikijaishop</h5>
        </div>
        <div className="input">
          <input className="inputtext" type="text"/>
        </div>
        <div  className="login">
          {
            isLogin===false?
            <>
            <h5 onClick={onsubmit} className="logintext">Login</h5>
            </>
            :
            <div className="loggedin">
            <h5 className="username" onClick={onlogout}>{username}</h5>
            <img alt={photo} class="ui avatar image" src={photo}/>
             </div> 
          }
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