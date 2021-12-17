import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    // const history = useHistory();

    const handleRemove = key => {
        // console.log(key);
        const newCart = cart.filter(product => product.key !== key);
        // console.log(newCart);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        //     history.push('/placeorder');
        setCart([]);
        clearTheCart();

    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        handleRemove={handleRemove}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to="/placeorder">
                        <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;