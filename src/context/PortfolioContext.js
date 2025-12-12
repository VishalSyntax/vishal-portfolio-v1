import React, { createContext, useContext, useReducer } from 'react';

const PortfolioContext = createContext();

const portfolioReducer = (state, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return { ...state, theme: action.payload };
        case 'SET_LANGUAGE':
            return { ...state, language: action.payload };
        case 'UPDATE_PROFILE':
            return { ...state, profile: { ...state.profile, ...action.payload } };
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

export const PortfolioProvider = ({ children }) => {
    const [state, dispatch] = useReducer(portfolioReducer, {
        theme: 'light',
        language: 'en',
        isLoading: false,
        profile: {
            name: 'Vishal Damodar',
            title: 'Java Full Stack Developer',
            location: 'Pune, Maharashtra',
            email: 'thatvishal007@gmail.com'
        },
        skills: [
            'React', 'JavaScript', 'HTML5', 'CSS3', 
            'Bootstrap', 'Webpack', 'Babel'
        ]
    });
    
    return (
        <PortfolioContext.Provider value={{ state, dispatch }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio must be used within PortfolioProvider');
    }
    return context;
};