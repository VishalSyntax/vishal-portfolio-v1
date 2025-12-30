import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

const Home = () => {
    const { state } = usePortfolio();
    const [currentRole, setCurrentRole] = useState(0);
    
    const roles = [
        'Java Full Stack Developer',
        'Spring Boot Specialist', 
        'React Developer',
        'Backend Engineer',
        'Web Developer'
    ];

    const skills = [
        { name: 'Java', level: 90, color: '#f89820' },
        { name: 'Spring Boot', level: 85, color: '#6db33f' },
        { name: 'React', level: 80, color: '#61dafb' },
        { name: 'JavaScript', level: 85, color: '#f7df1e' },
        { name: 'MySQL', level: 75, color: '#4479a1' }
    ];

    const quickStats = [
        { label: 'Projects', value: '10+', icon: '💼' },
        { label: 'Technologies', value: '15+', icon: '🛠️' },
        { label: 'Experience', value: '2+ Years', icon: '⏱️' },
        { label: 'Certificates', value: '6+', icon: '🏆' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}
            />
            
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(255,107,107,0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}
            />

            <div style={{
                padding: '4rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Hero Section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    minHeight: '80vh'
                }}>
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                fontSize: '1.2rem',
                                color: '#00d4ff',
                                marginBottom: '1rem',
                                fontWeight: 'bold'
                            }}
                        >
                            👋 Hello, I'm
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{
                                fontSize: '4rem',
                                fontWeight: 'bold',
                                background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '1rem',
                                lineHeight: '1.2'
                            }}
                        >
                            {state.profile.name || 'Vishal Damodar'}
                        </motion.h1>

                        {/* Animated Role */}
                        <div style={{ height: '60px', marginBottom: '2rem' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentRole}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        fontSize: '1.8rem',
                                        color: '#ff6b6b',
                                        fontWeight: '600'
                                    }}
                                >
                                    {roles[currentRole]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            style={{
                                fontSize: '1.2rem',
                                color: '#ccc',
                                lineHeight: '1.6',
                                marginBottom: '3rem'
                            }}
                        >
                            Passionate about building scalable web applications with modern technologies. 
                            Specialized in Java Spring Boot backend development and React frontend solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Link to="/projects" style={{ textDecoration: 'none' }}>
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: '1rem 2rem',
                                        background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                                        border: 'none',
                                        borderRadius: '25px',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        cursor: 'pointer',
                                        boxShadow: '0 5px 15px rgba(0, 212, 255, 0.3)'
                                    }}
                                >
                                    View Projects
                                </motion.button>
                            </Link>
                            
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: '1rem 2rem',
                                        background: 'transparent',
                                        border: '2px solid #00d4ff',
                                        borderRadius: '25px',
                                        color: '#00d4ff',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Get In Touch
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ textAlign: 'center' }}
                    >
                        {/* Profile Image Placeholder */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            style={{
                                width: '300px',
                                height: '300px',
                                background: 'linear-gradient(45deg, #00d4ff20, #ff6b6b20)',
                                borderRadius: '50%',
                                margin: '0 auto 2rem auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '6rem',
                                border: '3px solid rgba(0, 212, 255, 0.3)',
                                boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)'
                            }}
                        >
                            👨‍💻
                        </motion.div>

                        {/* Skills Progress */}
                        <div style={{ textAlign: 'left' }}>
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    style={{ marginBottom: '1rem' }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '0.5rem'
                                    }}>
                                        <span style={{ color: 'white', fontWeight: 'bold' }}>
                                            {skill.name}
                                        </span>
                                        <span style={{ color: skill.color }}>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div style={{
                                        width: '100%',
                                        height: '8px',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '4px',
                                        overflow: 'hidden'
                                    }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 1 + index * 0.1 }}
                                            style={{
                                                height: '100%',
                                                background: skill.color,
                                                borderRadius: '4px'
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginTop: '4rem'
                    }}
                >
                    {quickStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -5, scale: 1.05 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '15px',
                                padding: '2rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                {stat.icon}
                            </div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: '#00d4ff',
                                marginBottom: '0.5rem'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{ color: '#ccc' }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
