import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import profileIcon from '../../assets/profile-icon.png';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar-container">
            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="PokéAPI Logo" className="logo-img" />
            </div>

            {/* Menú para escritorio */}
            <div className="desktop-menu">
                <Link to="/" className="menu-link">Home</Link>
                <Link to="/favorites" className="menu-link">Favorites</Link>
            </div>

            {/* Icono de perfil*/}
            <div className="profile-icon-container">
                <img
                    src={profileIcon}
                    alt="Profile"
                    className="profile-img"
                />
            </div>

            {/* Menú hamburguesa */}
            <div className="menu-hamburger">
                <button onClick={toggleMenu} className="hamburger-button">
                    <svg
                        className="hamburger-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Menú desplegable*/}
            {menuOpen && (
                <div className="dropdown-menu">
                    <Link to="/" className="dropdown-item">Home</Link>
                    <Link to="/favorites" className="dropdown-item">Favorites</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
