import React from 'react';
import './CheckoutProduct.css';
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img
                className='checkoutProduct_image'
                src={image}
            />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    <Rating name="read-only" value={rating} precision="0.5" readOnly />
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    );
}

export default CheckoutProduct
