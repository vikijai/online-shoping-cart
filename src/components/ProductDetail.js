import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedProduct,
    removeSelectedProduct,
} from "../redux/actions/productaction";
import "./ProductDetail.css";

const ProductDetail = () => {
    let product = useSelector((state) => state.product);
    const { id, image, title, price, category, description } = product;
    const dispatch = useDispatch();
    const { productid } = useParams();
    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if (productid && productid !== "") fetchProductDetail(productid);
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productid]);
    return (
        <div className="card">
            <div className="leftcard">
                <img className="img" src={image} alt={id} />
            </div>
            <div className="rightcard">
                <div> <bold>{title}</bold></div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <bold>{price}</bold>
                <p>{category}</p>

            </div>
        </div>
    )
}

export default ProductDetail
