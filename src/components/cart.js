import React from 'react';
import { useSelector } from "react-redux";
import CartProduct from './CartProduct';
import "./cart.css";
//import { total } from '../redux/actions/productaction';
// import { total } from '../redux/reducers/Productreducer';
function Cart() {

    const cartitem = useSelector((state) => state.cart);
    //console.log(cartitem)
    // let total=0;
    return (

        <div className="cartcard">
            <div>
                {
                    cartitem.map((item, i) =>
                    (

                        <CartProduct key={i} id={item.id} title={item.title} image={item.image} description={item.description} price={item.price} category={item.category} />
                    )




                    )
                }
            </div>
            <div className="rightcart">
                <h2>
                    Total:
                    {
                        cartitem.reduce((total, item) =>
                            total = total + item.price

                            , 0)
                    }
                </h2>

            </div>
        </div>

    );
}

export default Cart
