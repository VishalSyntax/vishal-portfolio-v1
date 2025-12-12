import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const ThemeToggle = () => {
    const { state, dispatch } = usePortfolio();
    
    const toggleTheme = () => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        dispatch({ type: 'SET_THEME', payload: newTheme });
    };
    
    return (
        <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {state.theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;