import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="left-section">
                <span>Virtual Electromagnetics Laboratory</span>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/experiments">Experiments</Link></li>
                    <li><Link to="/instructions">Instructions</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <div className="right-section">
                <img
                    src="https://www.iitb.ac.in/themes/custom/iitb_bootstrap/logo.png"
                    alt="Institute Logo"
                    className="logo"
                />
                <div className="institute-name">
                    <div className="english-name">Indian Institute of Technology Bombay</div>
                    <div className="hindi-name">भारतीय प्रौद्योगिकी संस्थान मुंबई</div>
                </div>
            </div>            
        </header>
    );
}

export default Header;
