import React from 'react';
import './About.css';
import design from './public/design.svg';
import coding from './public/coding.svg';
import data from './public/data.svg';

const AboutComponent = () => {
    return (
        <div className="about-container">
            <Card
                title="UI/UX Designer"
                svg={design}
                description="I specialize in creating intuitive and engaging user interfaces. Check out my work on Behance."
                linkText="Behance"
                linkUrl="https://www.behance.net"
            />
            <Card
                title="Software Engineer"
                svg={coding}
                description="I build robust and scalable software solutions. Take a look at my projects."
                linkText="Projects"
                linkUrl="/projects"
            />
            <Card
                title="Data Analyst"
                svg={data}
                description="I analyze data to extract meaningful insights. See my data analysis work."
                linkText="Data Work"
                linkUrl="/data-work"
            />
        </div>
    );
};

const Card = ({ title, svg, description, linkText, linkUrl }) => {
    return (
        <div className="card-container">
            <div className="card-title">{title}</div>
            <img src={svg} alt={title} className="card-icon" />
            <div className="card-description">{description}</div>
            <a href={linkUrl} className="card-link">{linkText}</a>
        </div>
    );
};

export default AboutComponent;
