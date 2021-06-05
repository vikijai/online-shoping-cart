import React from 'react'
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/productaction';

function CartProduct({id,title,image,price,description,category}) {
    const dispatch = useDispatch();
    const removeitemtocart = () => {
        dispatch(removeFromCart({ id }));
    };
    return (
        <div>
            <div className="cartleftcard">
                    <img className="img" src={image} alt={id} />
                </div>
                <div className="cartrightcard">
                    <h2>{title}</h2>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                    <h3>{price}</h3>
                    <p>{category}</p>
                    <Button onClick={removeitemtocart} secondary>Remove from Cart</Button>

                </div>
        </div>
    )
}

export default CartProduct
