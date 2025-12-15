import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const About = () => {
    const { state } = usePortfolio();
    
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>
                <motion.div
                    className="card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ y: -5 }}
                >
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {state.profile.name}
                    </motion.h3>
                    <motion.p
                        className="title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {state.profile.title}
                    </motion.p>
                    <motion.p
                        className="location"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {state.profile.location}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        Passionate Full Stack Developer with expertise in modern web technologies. 
                        I specialize in building scalable applications using React.js for creating 
                        dynamic user interfaces and modern JavaScript frameworks.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
