import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
    const certificates = [
        {
            id: 1,
            title: "Java Full Stack Development",
            issuer: "Tech Institute",
            date: "2024",
            description: "Comprehensive course covering Java, Spring Boot, React, and database technologies",
            skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
            credentialId: "CERT-2024-001",
            status: "Verified"
        },
        {
            id: 2,
            title: "Spring Boot Microservices",
            issuer: "Spring Academy",
            date: "2024",
            description: "Advanced certification in building scalable microservices with Spring Boot",
            skills: ["Spring Boot", "Microservices", "Docker", "Kubernetes"],
            credentialId: "SPRING-2024-002",
            status: "Verified"
        },
        {
            id: 3,
            title: "React.js Development",
            issuer: "Frontend Masters",
            date: "2023",
            description: "Modern React development with hooks, context, and performance optimization",
            skills: ["React", "JavaScript", "Redux", "Testing"],
            credentialId: "REACT-2023-003",
            status: "Verified"
        },
        {
            id: 4,
            title: "Database Design & Management",
            issuer: "Database Institute",
            date: "2023",
            description: "Database design principles, SQL optimization, and NoSQL technologies",
            skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Optimization"],
            credentialId: "DB-2023-004",
            status: "Verified"
        },
        {
            id: 5,
            title: "Web Development Fundamentals",
            issuer: "Web Academy",
            date: "2023",
            description: "Foundation course in HTML5, CSS3, JavaScript, and responsive design",
            skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
            credentialId: "WEB-2023-005",
            status: "Verified"
        },
        {
            id: 6,
            title: "Git & Version Control",
            issuer: "DevOps Academy",
            date: "2023",
            description: "Advanced Git workflows, branching strategies, and collaboration techniques",
            skills: ["Git", "GitHub", "Version Control", "Collaboration"],
            credentialId: "GIT-2023-006",
            status: "Verified"
        }
    ];

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
                    Certificates & Achievements
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        textAlign: 'center',
                        color: '#ccc',
                        fontSize: '1.2rem',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        margin: '0 auto 3rem auto'
                    }}
                >
                    My journey of continuous learning and professional development in technology
                </motion.p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem',
                    padding: '1rem'
                }}>
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '15px',
                                padding: '2rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                color: 'white',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Certificate Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(45deg, #00d4ff20, #ff6b6b20)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                color: '#00d4ff'
                            }}>
                                🏆
                            </div>

                            {/* Status Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '15px',
                                fontSize: '0.8rem',
                                background: '#4ade80',
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                                {cert.status}
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <h3 style={{ 
                                    margin: '0 0 0.5rem 0', 
                                    color: '#00d4ff',
                                    fontSize: '1.4rem'
                                }}>
                                    {cert.title}
                                </h3>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1rem'
                                }}>
                                    <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>
                                        {cert.issuer}
                                    </span>
                                    <span style={{ color: '#888' }}>
                                        {cert.date}
                                    </span>
                                </div>
                            </div>

                            <p style={{ 
                                color: '#ccc', 
                                lineHeight: '1.6',
                                marginBottom: '1.5rem'
                            }}>
                                {cert.description}
                            </p>

                            {/* Skills */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ 
                                    color: '#00d4ff', 
                                    marginBottom: '0.75rem',
                                    fontSize: '1rem'
                                }}>
                                    Skills Covered:
                                </h4>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem'
                                }}>
                                    {cert.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                padding: '0.25rem 0.75rem',
                                                background: 'rgba(0, 212, 255, 0.2)',
                                                border: '1px solid #00d4ff',
                                                borderRadius: '15px',
                                                fontSize: '0.8rem',
                                                color: '#00d4ff'
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Credential ID */}
                            <div style={{
                                padding: '1rem',
                                background: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: '10px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{ color: '#888', fontSize: '0.9rem' }}>
                                        Credential ID:
                                    </span>
                                    <span style={{ 
                                        color: '#00d4ff', 
                                        fontFamily: 'monospace',
                                        fontSize: '0.9rem'
                                    }}>
                                        {cert.credentialId}
                                    </span>
                                </div>
                            </div>

                            {/* View Certificate Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    marginTop: '1rem',
                                    background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                                    border: 'none',
                                    borderRadius: '10px',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: '1rem'
                                }}
                            >
                                View Certificate
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{
                        marginTop: '4rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        textAlign: 'center'
                    }}
                >
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '15px',
                        padding: '2rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div style={{ fontSize: '3rem', color: '#00d4ff', marginBottom: '0.5rem' }}>
                            {certificates.length}
                        </div>
                        <div style={{ color: '#ccc' }}>Total Certificates</div>
                    </div>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '15px',
                        padding: '2rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div style={{ fontSize: '3rem', color: '#ff6b6b', marginBottom: '0.5rem' }}>
                            100%
                        </div>
                        <div style={{ color: '#ccc' }}>Completion Rate</div>
                    </div>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '15px',
                        padding: '2rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div style={{ fontSize: '3rem', color: '#4ade80', marginBottom: '0.5rem' }}>
                            2024
                        </div>
                        <div style={{ color: '#ccc' }}>Latest Year</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Certificates;