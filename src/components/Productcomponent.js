import React from "react";
import "./productcomponent.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
} from "../redux/actions/productaction";
import { Button } from 'semantic-ui-react'

const ProductComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  //console.log(products);
  const renderList = products.map((product) => {
    const additemtocart = () => {
      dispatch(addToCart(product));
    };
    const { id, title, image, price, category } = product;
    return (
      <div className="cards" key={id}>
        <Link className="link" to={`/product/${id}`}>
          <div className="cardimg">

          <img className="imgs" src={image} alt={id} />
          </div>
          <div className="carddown">
            <h4>{title}</h4>
            <h5>{price}</h5>
            <p>{category}</p>
          </div>
        </Link>
        <br></br>
        <div className="cardbutton">

        <Button onClick={additemtocart} secondary>Add To Cart</Button>
        </div>
      </div>

    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;