import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });
        
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Vishal Damodar'
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
            );
            
            setStatus({ 
                type: 'success', 
                message: 'Message sent successfully! I\'ll get back to you soon.' 
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus({ 
                type: 'error', 
                message: 'Failed to send message. Please try again or contact me directly.' 
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'thatvishal007@gmail.com',
            link: 'mailto:thatvishal007@gmail.com'
        },
        {
            icon: '📱',
            label: 'Phone',
            value: '+91 9876543210',
            link: 'tel:+919876543210'
        },
        {
            icon: '📍',
            label: 'Location',
            value: 'Pune, Maharashtra, India',
            link: null
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'linkedin.com/in/vishal-damodar',
            link: 'https://linkedin.com/in/vishal-damodar'
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
                        marginBottom: '1rem',
                        background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                    }}
                >
                    Get In Touch
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
                    Have a project in mind or want to collaborate? I'd love to hear from you!
                </motion.p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '15px',
                            padding: '2rem',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <h2 style={{ color: '#00d4ff', marginBottom: '2rem' }}>Send Message</h2>
                        
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ 
                                    display: 'block', 
                                    color: 'white', 
                                    marginBottom: '0.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        color: 'white',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="Your Name"
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ 
                                    display: 'block', 
                                    color: 'white', 
                                    marginBottom: '0.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        color: 'white',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ 
                                    display: 'block', 
                                    color: 'white', 
                                    marginBottom: '0.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        color: 'white',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="Project Discussion"
                                />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ 
                                    display: 'block', 
                                    color: 'white', 
                                    marginBottom: '0.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        color: 'white',
                                        fontSize: '1rem',
                                        resize: 'vertical'
                                    }}
                                    placeholder="Tell me about your project or idea..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: isLoading 
                                        ? 'rgba(0, 212, 255, 0.5)' 
                                        : 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                                    border: 'none',
                                    borderRadius: '10px',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    cursor: isLoading ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </motion.button>

                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        marginTop: '1rem',
                                        padding: '1rem',
                                        borderRadius: '10px',
                                        background: status.type === 'success' 
                                            ? 'rgba(76, 175, 80, 0.2)' 
                                            : 'rgba(244, 67, 54, 0.2)',
                                        border: `1px solid ${status.type === 'success' ? '#4caf50' : '#f44336'}`,
                                        color: status.type === 'success' ? '#4caf50' : '#f44336'
                                    }}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h2 style={{ color: '#00d4ff', marginBottom: '2rem' }}>Contact Information</h2>
                        
                        <div style={{ marginBottom: '3rem' }}>
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '15px',
                                        padding: '1.5rem',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}
                                >
                                    <div style={{ fontSize: '2rem' }}>{info.icon}</div>
                                    <div>
                                        <div style={{ color: '#00d4ff', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                                            {info.label}
                                        </div>
                                        {info.link ? (
                                            <a 
                                                href={info.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: '#ccc', textDecoration: 'none' }}
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <div style={{ color: '#ccc' }}>{info.value}</div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 style={{ color: '#ff6b6b', marginBottom: '1rem' }}>Follow Me</h3>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {[
                                    { name: 'GitHub', icon: '🐙', url: 'https://github.com/vishaldamodar' },
                                    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/vishal-damodar' },
                                    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/vishaldamodar' }
                                ].map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '50px',
                                            height: '50px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '50%',
                                            fontSize: '1.5rem',
                                            textDecoration: 'none',
                                            border: '1px solid rgba(255, 255, 255, 0.2)'
                                        }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
