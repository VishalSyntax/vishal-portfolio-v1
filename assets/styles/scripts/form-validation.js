// Form validation module
export function validateForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Clear previous error messages
    clearErrors();
    
    let isValid = true;
    
    if (!name) {
        showError('name', 'Name is required');
        isValid = false;
    }
    
    if (!email) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!message) {
        showError('message', 'Message is required');
        isValid = false;
    }
    
    if (isValid) {
        showSuccess('Form submitted successfully!');
        // Reset form
        document.getElementById('contact-form').reset();
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#dc3545';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    inputs.forEach(input => {
        input.style.borderColor = '#e9ecef';
    });
}

function showSuccess(message) {
    const form = document.getElementById('contact-form');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.color = '#28a745';
    successDiv.style.padding = '1rem';
    successDiv.style.backgroundColor = '#d4edda';
    successDiv.style.border = '1px solid #c3e6cb';
    successDiv.style.borderRadius = '6px';
    successDiv.style.marginTop = '1rem';
    
    form.appendChild(successDiv);
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}