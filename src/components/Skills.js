import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
    const { state } = usePortfolio();
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };
    
    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Skills
                </motion.h2>
                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {state.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{skill}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
