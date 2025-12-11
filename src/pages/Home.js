import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Home = () => {
    const { state } = usePortfolio();
    
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <h1>{state.profile.name}</h1>
                <p className="lead">{state.profile.title}</p>
                <p>Building modern web applications with passion</p>
            </div>
        </section>
    );
};

export default Home;
