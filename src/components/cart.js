import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { Button } from 'semantic-ui-react'
import { removeFromCart } from '../redux/actions/productaction';
function Cart() {
    const dispatch=useDispatch();
    const cartitem = useSelector((state) => state.cart);
    console.log(cartitem)
    const renderList = cartitem.map((item) => {
        const { id, title, image,description, price, category } = item;
        
        const removeitemtocart=()=>{
            dispatch(removeFromCart({id}));
        };
        return (
            <div className="cardcard">
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
                    <Button onClick={removeitemtocart} secondary>Remove from Cart</Button>

                </div>
            </div>

        );
    });
    return <>{renderList}</>;
}

export default Cart
