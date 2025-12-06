// Main entry point for webpack
import './styles/main.css';
import './styles/reset.css';
import { Portfolio, PortfolioApp, portfolioUtils } from './scripts/main.js';

// Initialize the application
console.log('Portfolio application loaded');

// Export for global access if needed
window.Portfolio = Portfolio;
window.portfolioUtils = portfolioUtils;
