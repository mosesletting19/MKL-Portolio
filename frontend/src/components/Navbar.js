import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="logo-container">
                <div className="pentagon">
                    <div className="logo-text">M</div>
                </div>
            </div>
            <div className={`links-container ${isOpen ? 'open' : ''}`}>
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">AboutMe</Link>
                <Link to="/projects" className="link">Projects</Link>

            </div>
            <div className="resume-container">
                <Link to="/resume" className="resume">Resume</Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
};

export default Navbar;
