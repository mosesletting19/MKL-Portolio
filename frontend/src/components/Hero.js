import React from 'react';
import './Hero.css'; // Assuming you have a CSS file for Hero component

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="text-container">
                <div className="title">Hi, my name is</div>
                <div className="name">Moses Letting.</div>
                <div className="subtitle">I build things.</div>
                <div className="description">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</div>
                <div className="button-container">
                    <button className="button">Check projects</button>
                </div>
            </div>
            <div className="image-container">
                <img src="/hero.png" alt="Hero" className="hero-image" />
            </div>
        </div>
    );
};

export default Hero;
