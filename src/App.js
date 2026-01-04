import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Certificates from './pages/Certificates';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';
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
                    style={{ flex: 1 }}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/certificates" element={<Certificates />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </motion.main>
            </AnimatePresence>
            <footer className="footer" style={{
                textAlign: 'center',
                padding: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.3)',
                color: '#888'
            }}>
                © {new Date().getFullYear()} Vishal Damodar — Built with React
            </footer>
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
