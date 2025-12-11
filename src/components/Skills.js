import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
    const { state } = usePortfolio();
    
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2>My Skills</h2>
                <div className="skills-grid">
                    {state.skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
