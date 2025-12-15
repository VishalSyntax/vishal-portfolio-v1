import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Header from './components/Header';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function AppContent() {
    const { state } = usePortfolio();
    const location = useLocation();
    
    useEffect(() => {
        document.body.className = state.theme;
    }, [state.theme]);
    
    const pageVariants = {
        initial: { opacity: 0, x: -20 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: 20 }
    };
    
    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5
    };
    
    return (
        <div className="App">
            <Header />
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </motion.main>
            </AnimatePresence>
        </div>
    );
}

function App() {
    return (
        <PortfolioProvider>
            <Router>
                <AppContent />
            </Router>
        </PortfolioProvider>
    );
}

export default App;
