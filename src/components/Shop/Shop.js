import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
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
                // console.log(key, savedCart[key])
                const addedProduct = products.find(product => product.id === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;

                    storedCart.push(addedProduct);
                }
                setCart(storedCart);
            }

        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        //save to local storage for now
        addToDb(product.id);


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
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;