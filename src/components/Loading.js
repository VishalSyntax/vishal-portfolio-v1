import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 40, color = '#00d4ff', text = 'Loading...' }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
        }}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                style={{
                    width: size,
                    height: size,
                    border: `3px solid transparent`,
                    borderTop: `3px solid ${color}`,
                    borderRadius: '50%'
                }}
            />
            {text && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        color: color,
                        fontSize: '0.9rem',
                        margin: 0
                    }}
                >
                    {text}
                </motion.p>
            )}
        </div>
    );
};

const LoadingPage = ({ message = 'Loading Portfolio...' }) => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '15px',
                    padding: '3rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center'
                }}
            >
                <LoadingSpinner size={60} text={message} />
            </motion.div>
        </div>
    );
};

const LoadingCard = ({ height = '200px', text = 'Loading content...' }) => {
    return (
        <div style={{
            height,
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <LoadingSpinner size={30} text={text} />
        </div>
    );
};

export { LoadingSpinner, LoadingPage, LoadingCard };
export default LoadingSpinner;