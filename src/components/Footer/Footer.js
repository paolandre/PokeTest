import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Logo */}
            <div className="footer-logo">
                <img src={logo} alt="PokéAPI Logo" />
            </div>

            {/* Texto */}
            <p className="footer-text">Rifate como los grandes y no olvides poner el footer. Éxito.</p>

            {/* Redes Sociales */}
            <div className="footer-socials">
                <a href="https://www.facebook.com" className="footer-icon" aria-label="Facebook">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com" className="footer-icon" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" className="footer-icon" aria-label="LinkedIn">
                    <FaLinkedinIn />
                </a>
                <a href="https://www.twitter.com" className="footer-icon" aria-label="Twitter">
                    <FaXTwitter />
                </a>
            </div>

            {/* Empresa */}
            <a href="https://grutstudio.com" className="footer-grut">
                Grutstudio
            </a>
        </footer>
    );
};

export default Footer;
