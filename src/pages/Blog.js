import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const blogPosts = [
        {
            id: 1,
            title: "Building Scalable Spring Boot Applications",
            excerpt: "Learn best practices for creating enterprise-level Spring Boot applications with proper architecture and design patterns.",
            category: "Backend",
            date: "2024-01-15",
            readTime: "8 min read",
            tags: ["Spring Boot", "Java", "Architecture"]
        },
        {
            id: 2,
            title: "React Performance Optimization Techniques",
            excerpt: "Discover advanced techniques to optimize React applications for better performance and user experience.",
            category: "Frontend",
            date: "2024-01-10",
            readTime: "6 min read",
            tags: ["React", "Performance", "JavaScript"]
        },
        {
            id: 3,
            title: "Microservices with Docker and Kubernetes",
            excerpt: "Complete guide to containerizing Java applications and orchestrating them with Kubernetes.",
            category: "DevOps",
            date: "2024-01-05",
            readTime: "12 min read",
            tags: ["Docker", "Kubernetes", "Microservices"]
        },
        {
            id: 4,
            title: "Database Design Best Practices",
            excerpt: "Essential principles for designing efficient and scalable database schemas for modern applications.",
            category: "Database",
            date: "2023-12-28",
            readTime: "10 min read",
            tags: ["MySQL", "Database Design", "SQL"]
        },
        {
            id: 5,
            title: "REST API Security with JWT",
            excerpt: "Implementing secure authentication and authorization in REST APIs using JSON Web Tokens.",
            category: "Backend",
            date: "2023-12-20",
            readTime: "7 min read",
            tags: ["JWT", "Security", "REST API"]
        },
        {
            id: 6,
            title: "Modern CSS Grid and Flexbox",
            excerpt: "Master modern CSS layout techniques for creating responsive and flexible web designs.",
            category: "Frontend",
            date: "2023-12-15",
            readTime: "5 min read",
            tags: ["CSS", "Grid", "Flexbox"]
        }
    ];

    const categories = ['All', 'Backend', 'Frontend', 'DevOps', 'Database'];

    const filteredPosts = selectedCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedCategory);

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
                        marginBottom: '1rem',
                        background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                    }}
                >
                    Tech Blog
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        textAlign: 'center',
                        color: '#ccc',
                        fontSize: '1.2rem',
                        marginBottom: '3rem'
                    }}
                >
                    Sharing insights on full-stack development, best practices, and emerging technologies
                </motion.p>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
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
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '25px',
                                border: '2px solid #00d4ff',
                                background: selectedCategory === category 
                                    ? 'linear-gradient(45deg, #00d4ff, #ff6b6b)' 
                                    : 'transparent',
                                color: selectedCategory === category ? 'white' : '#00d4ff',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Blog Posts Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
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
                                cursor: 'pointer'
                            }}
                        >
                            {/* Category Badge */}
                            <div style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '15px',
                                fontSize: '0.8rem',
                                background: 'rgba(0, 212, 255, 0.2)',
                                border: '1px solid #00d4ff',
                                color: '#00d4ff',
                                marginBottom: '1rem'
                            }}>
                                {post.category}
                            </div>

                            <h2 style={{ 
                                color: '#00d4ff', 
                                marginBottom: '1rem',
                                fontSize: '1.5rem'
                            }}>
                                {post.title}
                            </h2>

                            <p style={{ 
                                color: '#ccc', 
                                lineHeight: '1.6',
                                marginBottom: '1.5rem'
                            }}>
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                                marginBottom: '1.5rem'
                            }}>
                                {post.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            padding: '0.25rem 0.5rem',
                                            background: 'rgba(255, 107, 107, 0.2)',
                                            border: '1px solid #ff6b6b',
                                            borderRadius: '10px',
                                            fontSize: '0.75rem',
                                            color: '#ff6b6b'
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Meta Info */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                color: '#888',
                                fontSize: '0.9rem'
                            }}>
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                <span>{post.readTime}</span>
                            </div>

                            {/* Read More Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    marginTop: '1.5rem',
                                    background: 'transparent',
                                    border: '2px solid #00d4ff',
                                    borderRadius: '10px',
                                    color: '#00d4ff',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Read Article
                            </motion.button>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{
                        marginTop: '4rem',
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '15px',
                        padding: '3rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                >
                    <h3 style={{ color: '#00d4ff', marginBottom: '1rem' }}>
                        Stay Updated
                    </h3>
                    <p style={{ color: '#ccc', marginBottom: '2rem' }}>
                        Subscribe to get notified about new articles and tech insights
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        maxWidth: '400px',
                        margin: '0 auto',
                        flexWrap: 'wrap'
                    }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                borderRadius: '10px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                background: 'rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                minWidth: '200px'
                            }}
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                                border: 'none',
                                borderRadius: '10px',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Blog;