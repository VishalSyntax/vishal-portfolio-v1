import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Header from './components/Header';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function AppContent() {
    const { state } = usePortfolio();
    
    useEffect(() => {
        document.body.className = state.theme;
    }, [state.theme]);
    
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

function App() {
    return (
        <PortfolioProvider>
            <AppContent />
        </PortfolioProvider>
    );
}

export default App;
