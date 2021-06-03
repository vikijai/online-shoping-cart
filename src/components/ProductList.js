import React, { useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productaction";
import ProductComponent from "./Productcomponent";

const ProductPage = () => {
  //const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();



  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")

        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setProducts(response.data));
    };
    fetchProducts();
  }, []);

  //console.log("Products :", products);
  return (
    <div className="product">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;