import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { navigate('/Mens') }}>Men</li>
        <li onClick={() => { navigate('/Womens') }}>Women</li>
        <li onClick={() => { navigate('/Kids') }}>Kid</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'></div>
      </div>
    </div>
  );
}





