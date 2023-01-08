import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <ul className="ul-items">
            <li className="navbar__link"><a href="/about">About</a></li>
            <li className="navbar__link"><a href="/contact">Contact</a></li>
            <li className="navbar__link"><a href="/">Home</a></li>

        </ul>
    </div>
  )
}

export default Navbar