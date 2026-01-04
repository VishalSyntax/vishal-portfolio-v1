import React from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        
        // Log error to console in development
        if (process.env.NODE_ENV === 'development') {
            console.error('ErrorBoundary caught an error:', error, errorInfo);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
                    padding: '2rem'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '15px',
                            padding: '3rem',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            textAlign: 'center',
                            maxWidth: '500px',
                            width: '100%'
                        }}
                    >
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>
                        
                        <h2 style={{
                            color: '#ff6b6b',
                            marginBottom: '1rem',
                            fontSize: '1.5rem'
                        }}>
                            Something went wrong
                        </h2>
                        
                        <p style={{
                            color: '#ccc',
                            marginBottom: '2rem',
                            lineHeight: '1.6'
                        }}>
                            We're sorry, but something unexpected happened. Please try refreshing the page.
                        </p>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details style={{
                                background: 'rgba(255, 107, 107, 0.1)',
                                border: '1px solid #ff6b6b',
                                borderRadius: '8px',
                                padding: '1rem',
                                marginBottom: '2rem',
                                textAlign: 'left'
                            }}>
                                <summary style={{ color: '#ff6b6b', cursor: 'pointer', marginBottom: '0.5rem' }}>
                                    Error Details (Development)
                                </summary>
                                <pre style={{
                                    color: '#ccc',
                                    fontSize: '0.8rem',
                                    overflow: 'auto',
                                    whiteSpace: 'pre-wrap'
                                }}>
                                    {this.state.error.toString()}
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <motion.button
                                onClick={() => window.location.reload()}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                                    border: 'none',
                                    borderRadius: '25px',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                            >
                                Refresh Page
                            </motion.button>
                            
                            <motion.button
                                onClick={() => window.history.back()}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    background: 'transparent',
                                    border: '2px solid #00d4ff',
                                    borderRadius: '25px',
                                    color: '#00d4ff',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                            >
                                Go Back
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;