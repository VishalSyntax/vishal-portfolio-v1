import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    className = '',
    style = {},
    placeholder = 'blur',
    quality = 75,
    loading = 'lazy',
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [error, setError] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setError(true);
        setIsLoaded(true);
    };

    const getPlaceholder = () => {
        if (placeholder === 'blur') {
            return `data:image/svg+xml;base64,${btoa(`
                <svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:0.1" />
                            <stop offset="100%" style="stop-color:#ff6b6b;stop-opacity:0.1" />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grad)" />
                    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#00d4ff" font-size="16">Loading...</text>
                </svg>
            `)}`;
        }
        return placeholder;
    };

    return (
        <div
            ref={imgRef}
            className={`optimized-image-container ${className}`}
            style={{
                position: 'relative',
                overflow: 'hidden',
                width: width || '100%',
                height: height || 'auto',
                ...style
            }}
            {...props}
        >
            {/* Placeholder */}
            {!isLoaded && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, rgba(0,212,255,0.1), rgba(255,107,107,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00d4ff',
                        fontSize: '0.9rem'
                    }}
                >
                    {error ? '❌ Failed to load' : '⏳ Loading...'}
                </div>
            )}

            {/* Actual Image */}
            {isInView && (
                <motion.img
                    src={error ? getPlaceholder() : src}
                    alt={alt}
                    loading={loading}
                    onLoad={handleLoad}
                    onError={handleError}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
            )}
        </div>
    );
};

export default OptimizedImage;