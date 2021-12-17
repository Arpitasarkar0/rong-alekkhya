import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo2.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className='headers' >
            <div className='header'>
                <img className='logo' src={logo} alt="" />
                <h2>ong Alekkhya</h2>
            </div>
            <nav>
                <NavLink to="/shop">
                    Shop
                </NavLink >
                <NavLink to="/review">
                    Orders
                </NavLink >
                <NavLink to="/inventory">
                    Manage Inventory
                </NavLink >
            </nav>
        </div>
    );
};

export default Header;