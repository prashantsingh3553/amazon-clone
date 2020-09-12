import React from 'react'
import './Product.css';
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small><sup>₹ </sup></small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                <Rating name="read-only" value={rating} precision="0.5" readOnly />
                </div>
            </div>

            <img
            src={image}
            alt=""
            />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;
