import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div style={{ 
            minHeight: '100vh', 
            padding: '2rem',
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ maxWidth: '1200px', margin: '0 auto' }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: '3rem',
                        textAlign: 'center',
                        marginBottom: '2rem',
                        background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                    }}
                >
                    Resume
                </motion.h1>

                {/* Download Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '2rem'
                    }}
                >
                    <motion.a
                        href="/resume.pdf"
                        download="Vishal_Damodar_Resume.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2rem',
                            background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                            border: 'none',
                            borderRadius: '25px',
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.1rem'
                        }}
                    >
                        📄 Download Resume
                    </motion.a>
                </motion.div>

                {/* PDF Viewer Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '15px',
                        padding: '2rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        position: 'relative',
                        minHeight: '800px'
                    }}
                >
                    {isLoading && (
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#00d4ff',
                            fontSize: '1.2rem'
                        }}>
                            Loading Resume...
                        </div>
                    )}

                    <iframe
                        src="/resume.pdf"
                        style={{
                            width: '100%',
                            height: '800px',
                            border: 'none',
                            borderRadius: '10px'
                        }}
                        onLoad={() => setIsLoading(false)}
                        title="Vishal Damodar Resume"
                    />
                </motion.div>

                {/* Resume Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{
                        marginTop: '3rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '15px',
                        padding: '2rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💼</div>
                        <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Experience</h3>
                        <p style={{ color: '#ccc' }}>Java Full Stack Developer</p>
                    </div>

                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '15px',
                        padding: '2rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎓</div>
                        <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Education</h3>
                        <p style={{ color: '#ccc' }}>Computer Science Graduate</p>
                    </div>

                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '15px',
                        padding: '2rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛠️</div>
                        <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Skills</h3>
                        <p style={{ color: '#ccc' }}>Java, Spring Boot, React</p>
                    </div>

                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '15px',
                        padding: '2rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📍</div>
                        <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Location</h3>
                        <p style={{ color: '#ccc' }}>Pune, Maharashtra</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Resume;