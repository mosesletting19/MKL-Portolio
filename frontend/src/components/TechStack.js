import React from 'react';
import './TechStack.css';


const TechStack = () => {
    return (
        <div className="tech-stack-container">
            <h2 className="tech-stack-heading">Tech Stack</h2>
            <div className="tech-stack-icons">
                <TechIcon logo='./figma.svg' name="Figma" />
                <TechIcon logo='./js.svg' name="JavaScript" />
                <TechIcon logo='./react.svg' name="React" />
                <TechIcon logo='./python.svg' name="Python" />
                <TechIcon logo='./flask.svg' name="Flask" />

            </div>
        </div>
    );
};

const TechIcon = ({ logo, name }) => {
    return (
        <div className="tech-icon">
            <img src={logo} alt={name} />
            <span className="tech-name">{name}</span>
        </div>
    );
};

export default TechStack;
