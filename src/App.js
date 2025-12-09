import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [activeSection, setActiveSection] = useState('home');
    
    const personalInfo = {
        name: 'Vishal Damodar',
        title: 'Java Full Stack Developer',
        location: 'Pune, Maharashtra',
        email: 'thatvishal007@gmail.com'
    };
    
    const skills = [
        'React', 'JavaScript', 'HTML5', 'CSS3', 
        'Bootstrap', 'Webpack', 'Babel'
    ];
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    
    return (
        <Router>
            <div className="App">
                <Header 
                    personalInfo={personalInfo}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <main>
                    <Routes>
                        <Route path="/" element={<Home personalInfo={personalInfo} />} />
                        <Route path="/about" element={<AboutPage personalInfo={personalInfo} />} />
                        <Route path="/skills" element={<SkillsPage skills={skills} />} />
                        <Route path="/contact" element={<ContactPage personalInfo={personalInfo} />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
