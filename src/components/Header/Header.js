import React from 'react';
import logo from '../../images/logo2.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className='headers' >
            <div className='header'>
                <img className='logo' src={logo} alt="" />
                <h2>ong Alekkhya</h2>
            </div>
            <nav><a href="/shop">
                Shop
            </a>
                <a href="/orders">
                    Orders
                </a>
                <a href="/inventory">
                    Manage Inventory
                </a>
            </nav>
        </div>
    );
};

export default Header;