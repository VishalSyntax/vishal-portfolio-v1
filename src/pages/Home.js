import React from 'react';

const Home = ({ personalInfo }) => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <h1>{personalInfo.name}</h1>
                <p className="lead">{personalInfo.title}</p>
                <p>Building modern web applications with passion</p>
            </div>
        </section>
    );
};

export default Home;
