import React from 'react';
import { motion } from 'framer-motion';
import { useResponsive } from '../hooks/useResponsive';
import SEO from '../components/SEO';

const Projects = () => {
    const { isMobile } = useResponsive();
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce application built with Spring Boot and React",
            technologies: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
            image: "/portfolio.jpg",
            github: "https://github.com/vishaldamodar",
            live: "#",
            status: "Completed"
        },
        {
            id: 2,
            title: "Task Management System",
            description: "Web application for project and task management with real-time updates",
            technologies: ["Java", "Spring Boot", "Thymeleaf", "Bootstrap", "H2 Database"],
            image: "/portfolio.jpg",
            github: "https://github.com/vishaldamodar",
            live: "#",
            status: "In Progress"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "Modern responsive portfolio website showcasing full-stack development skills",
            technologies: ["React", "Framer Motion", "CSS3", "JavaScript", "Vite"],
            image: "/portfolio.jpg",
            github: "https://github.com/vishaldamodar",
            live: "#",
            status: "Completed"
        }
    ];

    return (
        <>
            <SEO 
                title="Projects - Vishal Damodar | Java Full Stack Developer"
                description="Explore my portfolio of Java Spring Boot and React projects. Full-stack web applications, e-commerce platforms, and modern web solutions."
                keywords="Java Projects, Spring Boot Projects, React Projects, Full Stack Projects, Web Development Portfolio, E-commerce, Task Management"
                url="https://vishaldamodar.dev/projects"
            />
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
                        marginBottom: '3rem',
                        background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                    }}
                >
                    My Projects
                </motion.h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    padding: '1rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '15px',
                                padding: '1.5rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                color: 'white'
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '200px',
                                background: 'linear-gradient(45deg, #00d4ff20, #ff6b6b20)',
                                borderRadius: '10px',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3rem',
                                color: '#00d4ff'
                            }}>
                                💻
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
                                <h3 style={{ margin: 0, color: '#00d4ff' }}>{project.title}</h3>
                                <span style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    background: project.status === 'Completed' ? '#4ade80' : '#fbbf24',
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}>
                                    {project.status}
                                </span>
                            </div>

                            <p style={{ 
                                color: '#ccc', 
                                lineHeight: '1.6',
                                marginBottom: '1rem'
                            }}>
                                {project.description}
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem'
                                }}>
                                    {project.technologies.map((tech, i) => (
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
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                gap: '1rem'
                            }}>
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: '0.75rem 1.5rem',
                                        background: 'transparent',
                                        border: '2px solid #00d4ff',
                                        borderRadius: '25px',
                                        color: '#00d4ff',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    GitHub
                                </motion.a>
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: '0.75rem 1.5rem',
                                        background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                                        border: 'none',
                                        borderRadius: '25px',
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Live Demo
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
        </>
    );
};

export default Projects;