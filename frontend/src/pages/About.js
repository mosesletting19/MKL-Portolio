import React from 'react';
import '../components/About.css';
import '../components/TechStack'
import TechStack from '../components/TechStack';
const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-heading">
                <span className="heading-decor">•</span> About Me
            </h2>
            <div className="cards-wrapper">
                <Card
                    title="UI/UX Designer"
                    svg='design.svg'
                    description="I specialize in creating intuitive and engaging user interfaces. Check out my work on Behance."
                    linkText="Behance"
                    linkUrl="https://www.behance.net"
                />
                <Card
                    title="Software Engineer"
                    svg='./coding.svg'
                    description="I build robust and scalable software solutions. Take a look at my projects."
                    linkText="Projects"
                    linkUrl="/projects"
                    special={true}
                />
                <Card
                    title="Data Analyst"
                    svg='./data.svg'
                    description="I analyze data to extract meaningful insights. See my data analysis work."
                    linkText="Data Work"
                    linkUrl="/data-work"
                />
            </div>
            <TechStack />
        </div>
    );
};

const Card = ({ title, svg, description, linkText, linkUrl, special }) => {
    return (
        <div className={`card-container ${special ? 'special-card' : ''}`}>
            <div className="card-title">{title}</div>
            <img src={svg} alt={title} className="card-icon" />
            <div className="card-description">{description}</div>
            <a href={linkUrl} className="card-link">{linkText}</a>
        </div>
    );
};

export default About;
