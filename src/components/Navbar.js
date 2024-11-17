import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Pet Shop</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pets">Pets</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
