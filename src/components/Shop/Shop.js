import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {

        fetch('./product.json')
            .then(res => res.json())
            .then(data => {
                // search feild 
                setDisplayProducts(data);
                // ----//
                setProducts(data);

            })
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const existis = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (existis) {
            const rest = cart.filter(pd => pd.key !== product.key);
            existis.quantity = existis.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        console.log(newCart);
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);
    }
    // Search feild 
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProducts);
        console.log(matchProducts.length);

    }
    // ------//

    return (
        <>
            {/* search feild  */}
            <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                    placeholder='Search Product' />
            </div>
            {/* ----- */}
            <div className='shop-container'>
                <div className="product-container ">
                    <div className='products'>
                        {
                            displayProducts.map(product => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>

                    <div className='see-more'>
                        <button>See more</button>
                    </div>
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}>

                        <Link to="/review">
                            <button className='btn-regular'>Order Now</button>
                        </Link>

                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;