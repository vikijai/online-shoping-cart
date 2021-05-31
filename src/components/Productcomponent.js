import React from "react";
import "./productcomponent.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Link className="link" to={`/product/${id}`}>
        
          <div className="card" key={id}>
            <img className="img" src={image} alt={id} />
            <bold>{title}</bold>
            <bold>{price}</bold>
            <p>{category}</p>
          </div>
      </Link>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;