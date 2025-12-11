import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const About = () => {
    const { state } = usePortfolio();
    
    return (
        <section id="about" className="section">
            <div className="container">
                <h2>About Me</h2>
                <div className="card">
                    <h3>{state.profile.name}</h3>
                    <p className="title">{state.profile.title}</p>
                    <p className="location">{state.profile.location}</p>
                    <p>Passionate Full Stack Developer with expertise in modern web technologies. 
                       I specialize in building scalable applications using React.js for creating 
                       dynamic user interfaces and modern JavaScript frameworks.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
