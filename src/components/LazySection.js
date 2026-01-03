import React from 'react';
import { motion } from 'framer-motion';
import { useLazyLoad } from '../hooks/useLazyLoad';

const LazySection = ({ 
    children, 
    className = '', 
    style = {},
    threshold = 0.1,
    rootMargin = '50px',
    animation = true,
    ...props 
}) => {
    const { elementRef, isInView, hasLoaded } = useLazyLoad({
        threshold,
        rootMargin,
        triggerOnce: true
    });

    const defaultVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    if (animation) {
        return (
            <motion.div
                ref={elementRef}
                className={className}
                style={style}
                variants={defaultVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, ease: "easeOut" }}
                {...props}
            >
                {hasLoaded && children}
            </motion.div>
        );
    }

    return (
        <div
            ref={elementRef}
            className={className}
            style={style}
            {...props}
        >
            {hasLoaded && children}
        </div>
    );
};

export default LazySection;