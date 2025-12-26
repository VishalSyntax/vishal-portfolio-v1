import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryItems = [
        {
            id: 1,
            title: "Coding Session",
            description: "Late night coding session working on React projects",
            image: "/vishal.jpg",
            category: "Work"
        },
        {
            id: 2,
            title: "Tech Conference",
            description: "Attending Java Spring Boot workshop",
            image: "/vishal.jpg",
            category: "Learning"
        },
        {
            id: 3,
            title: "Project Demo",
            description: "Presenting full-stack e-commerce application",
            image: "/vishal.jpg",
            category: "Achievement"
        },
        {
            id: 4,
            title: "Team Collaboration",
            description: "Working with team on innovative solutions",
            image: "/vishal.jpg",
            category: "Work"
        },
        {
            id: 5,
            title: "Learning Journey",
            description: "Exploring new technologies and frameworks",
            image: "/vishal.jpg",
            category: "Learning"
        },
        {
            id: 6,
            title: "Code Review",
            description: "Reviewing and optimizing application performance",
            image: "/vishal.jpg",
            category: "Work"
        }
    ];

    const categories = ["All", "Work", "Learning", "Achievement"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All" 
        ? galleryItems 
        : galleryItems.filter(item => item.category === activeCategory);

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
                    Gallery
                </motion.h1>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginBottom: '3rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '25px',
                                border: '2px solid #00d4ff',
                                background: activeCategory === category 
                                    ? 'linear-gradient(45deg, #00d4ff, #ff6b6b)' 
                                    : 'transparent',
                                color: activeCategory === category ? 'white' : '#00d4ff',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        padding: '1rem'
                    }}
                >
                    <AnimatePresence>
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                onClick={() => setSelectedImage(item)}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    cursor: 'pointer'
                                }}
                            >
                                <div style={{
                                    width: '100%',
                                    height: '250px',
                                    background: 'linear-gradient(45deg, #00d4ff20, #ff6b6b20)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem',
                                    color: '#00d4ff'
                                }}>
                                    📸
                                </div>
                                
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '0.5rem'
                                    }}>
                                        <h3 style={{ margin: 0, color: '#00d4ff' }}>{item.title}</h3>
                                        <span style={{
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '15px',
                                            fontSize: '0.8rem',
                                            background: 'rgba(0, 212, 255, 0.2)',
                                            border: '1px solid #00d4ff',
                                            color: '#00d4ff'
                                        }}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <p style={{ 
                                        color: '#ccc', 
                                        lineHeight: '1.6',
                                        margin: 0
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Modal for selected image */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0, 0, 0, 0.9)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1000,
                                cursor: 'pointer'
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '15px',
                                    padding: '2rem',
                                    maxWidth: '90%',
                                    maxHeight: '90%',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    cursor: 'default'
                                }}
                            >
                                <div style={{
                                    width: '400px',
                                    height: '300px',
                                    background: 'linear-gradient(45deg, #00d4ff20, #ff6b6b20)',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '6rem',
                                    color: '#00d4ff',
                                    marginBottom: '1rem'
                                }}>
                                    📸
                                </div>
                                <h2 style={{ color: '#00d4ff', textAlign: 'center' }}>{selectedImage.title}</h2>
                                <p style={{ color: '#ccc', textAlign: 'center' }}>{selectedImage.description}</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Gallery;