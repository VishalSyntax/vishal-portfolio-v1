import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const quickLinks = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/projects', label: 'Projects', icon: '💼' },
        { path: '/blog', label: 'Blog', icon: '📝' },
        { path: '/contact', label: 'Contact', icon: '📧' }
    ];

    return (
        <div style={{ 
            minHeight: '100vh', 
            padding: '2rem',
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ 
                    textAlign: 'center',
                    maxWidth: '600px'
                }}
            >
                {/* 404 Animation */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.2,
                        type: 'spring',
                        stiffness: 200
                    }}
                    style={{
                        fontSize: '8rem',
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem'
                    }}
                >
                    404
                </motion.div>

                {/* Error Message */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        color: 'white',
                        fontSize: '2.5rem',
                        marginBottom: '1rem'
                    }}
                >
                    Page Not Found
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        color: '#ccc',
                        fontSize: '1.2rem',
                        marginBottom: '3rem',
                        lineHeight: '1.6'
                    }}
                >
                    Oops! The page you're looking for doesn't exist. 
                    It might have been moved, deleted, or you entered the wrong URL.
                </motion.p>

                {/* Navigation Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                        gap: '1rem',
                        marginBottom: '3rem'
                    }}
                >
                    {quickLinks.map((link, index) => (
                        <motion.div
                            key={link.path}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        >
                            <Link
                                to={link.path}
                                style={{ textDecoration: 'none' }}
                            >
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.05, 
                                        y: -5,
                                        boxShadow: '0 10px 25px rgba(0, 212, 255, 0.3)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '15px',
                                        padding: '1.5rem',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(10px)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div style={{ 
                                        fontSize: '2rem', 
                                        marginBottom: '0.5rem' 
                                    }}>
                                        {link.icon}
                                    </div>
                                    <div style={{ 
                                        color: '#00d4ff', 
                                        fontWeight: 'bold' 
                                    }}>
                                        {link.label}
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Back to Home Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 2rem',
                                background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                                border: 'none',
                                borderRadius: '25px',
                                color: 'white',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: '0 5px 15px rgba(0, 212, 255, 0.3)'
                            }}
                        >
                            🏠 Back to Home
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Floating Animation Elements */}
                <motion.div
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: 'easeInOut' 
                    }}
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '10%',
                        fontSize: '3rem',
                        opacity: 0.3
                    }}
                >
                    🚀
                </motion.div>

                <motion.div
                    animate={{ 
                        y: [0, 15, 0],
                        rotate: [0, -5, 5, 0]
                    }}
                    transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: 'easeInOut',
                        delay: 1
                    }}
                    style={{
                        position: 'absolute',
                        top: '30%',
                        right: '15%',
                        fontSize: '2.5rem',
                        opacity: 0.3
                    }}
                >
                    ⭐
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;