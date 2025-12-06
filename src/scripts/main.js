import { validateForm } from './form-validation.js';

// ES6+ Portfolio Class with modern JavaScript features
class Portfolio {
    constructor(name, skills, location = 'Pune, Maharashtra') {
        this.name = name;
        this.skills = skills;
        this.location = location;
        this.projects = [];
        this.isLoading = false;
    }
    
    // Async method with error handling
    async fetchProjects() {
        this.isLoading = true;
        try {
            const response = await fetch('/api/projects');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const projects = await response.json();
            this.projects = projects;
            return projects;
        } catch (error) {
            console.error('Error fetching projects:', error);
            return [];
        } finally {
            this.isLoading = false;
        }
    }
    
    // Destructuring and template literals
    displaySkills() {
        const { skills } = this;
        return skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
    }
    
    // Arrow function with default parameters
    getInfo = (includeLocation = true) => {
        const { name, location } = this;
        return includeLocation ? `${name} from ${location}` : name;
    }
    
    // Method with spread operator
    addSkills(...newSkills) {
        this.skills = [...this.skills, ...newSkills];
        return this;
    }
}

// Module pattern with ES6+ features
export const portfolioUtils = {
    // Arrow functions
    formatDate: (date) => new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }),
    
    validateEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    
    // Debounce with arrow function and rest parameters
    debounce: (func, wait = 300) => {
        let timeout;
        return (...args) => {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Promise-based utility
    delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    
    // Object destructuring and default parameters
    createSkillElement: ({ skill, level = 'intermediate' } = {}) => {
        const element = document.createElement('div');
        element.className = 'skill-card';
        element.innerHTML = `
            <span class="skill-name">${skill}</span>
            <span class="skill-level">${level}</span>
        `;
        return element;
    }
};

// DOM manipulation with modern JavaScript
class PortfolioApp {
    constructor() {
        this.portfolio = new Portfolio('Vishal Damodar', [
            'Java', 'Spring Boot', 'React', 'MySQL', 
            'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'
        ]);
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.loadPortfolioData();
    }
    
    setupEventListeners() {
        // Smooth scrolling with arrow functions
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', this.handleNavClick);
        });
        
        // Form validation
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', validateForm);
        }
        
        // Debounced scroll handler
        const debouncedScroll = portfolioUtils.debounce(this.handleScroll, 100);
        window.addEventListener('scroll', debouncedScroll);
    }
    
    // Arrow function to maintain 'this' context
    handleNavClick = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe all sections and cards
        document.querySelectorAll('section, .card, .skill-card').forEach(el => {
            observer.observe(el);
        });
    }
    
    async loadPortfolioData() {
        try {
            // Simulate loading portfolio data
            await portfolioUtils.delay(1000);
            
            // Update skills display with modern JavaScript
            const skillsContainer = document.querySelector('.skills-grid');
            if (skillsContainer) {
                const { skills } = this.portfolio;
                skillsContainer.innerHTML = skills
                    .map(skill => `<div class="skill-card">${skill}</div>`)
                    .join('');
            }
            
            console.log('Portfolio loaded:', this.portfolio.getInfo());
        } catch (error) {
            console.error('Error loading portfolio:', error);
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Export for potential use in other modules
export { Portfolio, PortfolioApp };