import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import profileIcon from '../../assets/profile-icon.png';
import './NavBar.css';

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
                <a href="/" className="menu-link">Home</a>
                <a href="/favorites" className="menu-link">Favorites</a>
            </div>

            {/* Icono de perfil con borde redondeado */}
            <div className="profile-icon-container">
                <img
                    src={profileIcon}
                    alt="Profile"
                    className="profile-img"
                />
            </div>

            {/* Menú hamburguesa para móviles */}
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

            {/* Menú desplegable para móviles */}
            {menuOpen && (
                <div className="dropdown-menu">
                    <a href="/" className="dropdown-item">Home</a>
                    <a href="/favorites" className="dropdown-item">Favorites</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
