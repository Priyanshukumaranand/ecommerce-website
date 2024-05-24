import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <img src={cart_icon} alt=""/>
            <p>Shopper</p>
        </div>
    </div>
  )
}

export default Navbar

