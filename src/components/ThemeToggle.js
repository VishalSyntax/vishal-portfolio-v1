import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const ThemeToggle = () => {
    const { state, dispatch } = usePortfolio();
    
    const toggleTheme = () => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        dispatch({ type: 'SET_THEME', payload: newTheme });
    };
    
    return (
        <motion.button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: state.theme === 'dark' ? 180 : 0 }}
            transition={{ duration: 0.3 }}
        >
            {state.theme === 'light' ? '🌙' : '☀️'}
        </motion.button>
    );
};

export default ThemeToggle;