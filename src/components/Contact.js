import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormValidation } from '../hooks/useFormValidation';
import { usePortfolio } from '../context/PortfolioContext';

const Contact = () => {
    const { state } = usePortfolio();
    const [success, setSuccess] = useState(false);
    
    const validate = (values) => {
        const errors = {};
        
        if (!values.name.trim()) {
            errors.name = 'Name is required';
        }
        
        if (!values.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = 'Invalid email format';
        }
        
        if (!values.message.trim()) {
            errors.message = 'Message is required';
        }
        
        return errors;
    };
    
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        resetForm
    } = useFormValidation(
        { name: '', email: '', message: '' },
        validate
    );
    
    const onSubmit = () => {
        setSuccess(true);
        resetForm();
        setTimeout(() => setSuccess(false), 3000);
    };
    
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Me
                </motion.h2>
                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={values.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        
                        <motion.button
                            type="submit"
                            className="btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                        
                        {success && (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                Message sent successfully!
                            </motion.div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
