import { useState } from 'react';

export const useFormValidation = (initialState, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    
    const handleSubmit = (callback) => (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const validationErrors = validate(values);
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length === 0) {
            callback();
        }
        
        setIsSubmitting(false);
    };
    
    const resetForm = () => {
        setValues(initialState);
        setErrors({});
    };
    
    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        resetForm
    };
};
