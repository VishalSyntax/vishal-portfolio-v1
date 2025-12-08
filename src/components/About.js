import React from 'react';

const About = ({ personalInfo }) => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2>About Me</h2>
                <div className="card">
                    <h3>{personalInfo.name}</h3>
                    <p className="title">{personalInfo.title}</p>
                    <p className="location">{personalInfo.location}</p>
                    <p>Passionate Java Full Stack Developer with expertise in modern web technologies. 
                       I specialize in building scalable applications using Spring Boot for backend 
                       development and React.js for creating dynamic user interfaces.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
