import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';


const Product = (props) => {
    const { name, img, price, description, star } = props.product;
    return (
        <div className='product'>
            <img className='product-img' src={img} alt="" />
            <h3 className=''>Name: {name}</h3>
            <h5>Price: {price}TK.</h5>
            <p>Details: {description}</p>
            <p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star "
                    fullSymbol="fas fa-star icon-color"
                    readonly>

                </Rating>
            </p>
            <button
                onClick={() => props.handleAddToCart(props.product)}
                className='btn-regular'> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
        </div>
    );
};

export default Product;