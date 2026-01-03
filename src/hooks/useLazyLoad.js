import { useState, useEffect, useRef } from 'react';

export const useLazyLoad = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const elementRef = useRef(null);

    const {
        threshold = 0.1,
        rootMargin = '50px',
        triggerOnce = true
    } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    setHasLoaded(true);
                    
                    if (triggerOnce) {
                        observer.disconnect();
                    }
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { elementRef, isInView, hasLoaded };
};

export const useImagePreloader = (imageSources) => {
    const [loadedImages, setLoadedImages] = useState(new Set());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!imageSources || imageSources.length === 0) {
            setIsLoading(false);
            return;
        }

        let loadedCount = 0;
        const totalImages = imageSources.length;

        const preloadImage = (src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    setLoadedImages(prev => new Set([...prev, src]));
                    loadedCount++;
                    if (loadedCount === totalImages) {
                        setIsLoading(false);
                    }
                    resolve();
                };
                img.onerror = () => {
                    loadedCount++;
                    if (loadedCount === totalImages) {
                        setIsLoading(false);
                    }
                    resolve();
                };
                img.src = src;
            });
        };

        Promise.all(imageSources.map(preloadImage));
    }, [imageSources]);

    return { loadedImages, isLoading };
};