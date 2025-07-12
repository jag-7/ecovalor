// ===== AUTH PAGES JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const passwordToggles = document.querySelectorAll('.password-toggle');
    
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const eyeIcon = this.querySelector('.eye-icon');
            
            if (input.type === 'password') {
                input.type = 'text';
                eyeIcon.textContent = '🙈';
            } else {
                input.type = 'password';
                eyeIcon.textContent = '👁️';
            }
        });
    });

    // Form validation and submission
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRegister();
        });
    }

    // Password confirmation validation
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            validatePasswordMatch();
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            validatePasswordStrength();
        });
    }
});

// Handle login form submission
function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.querySelector('input[name="remember"]').checked;

    // Basic validation
    if (!email || !password) {
        showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage('Por favor, insira um e-mail válido.', 'error');
        return;
    }

    // Simulate login process
    showMessage('Fazendo login...', 'info');
    
    setTimeout(() => {
        // Simulate successful login
        showMessage('Login realizado com sucesso! Redirecionando...', 'success');
        
        // Store user session
        if (remember) {
            localStorage.setItem('userEmail', email);
        }
        
        // Redirect to dashboard (simulate)
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 2000);
}

// Handle register form submission
function handleRegister() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.querySelector('input[name="terms"]').checked;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !neighborhood || !password || !confirmPassword) {
        showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage('Por favor, insira um e-mail válido.', 'error');
        return;
    }

    if (!isValidPhone(phone)) {
        showMessage('Por favor, insira um número de telefone válido.', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showMessage('As senhas não coincidem.', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage('A senha deve ter pelo menos 6 caracteres.', 'error');
        return;
    }

    if (!terms) {
        showMessage('Você deve aceitar os termos de uso.', 'error');
        return;
    }

    // Simulate registration process
    showMessage('Criando sua conta...', 'info');
    
    setTimeout(() => {
        // Simulate successful registration
        showMessage('Conta criada com sucesso! Redirecionando...', 'success');
        
        // Store user data (simulate)
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', firstName + ' ' + lastName);
        
        // Redirect to dashboard (simulate)
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 2000);
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone format (Angola)
function isValidPhone(phone) {
    const phoneRegex = /^\+244\s?\d{9}$/;
    return phoneRegex.test(phone);
}

// Validate password match
function validatePasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (confirmPassword && password !== confirmPassword) {
        confirmPasswordInput.style.borderColor = '#e74c3c';
        showFieldMessage('As senhas não coincidem', 'error', confirmPasswordInput);
    } else {
        confirmPasswordInput.style.borderColor = '#00B894';
        hideFieldMessage(confirmPasswordInput);
    }
}

// Validate password strength
function validatePasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('password-strength');
    
    if (!strengthIndicator) return;
    
    let strength = 0;
    let feedback = '';
    
    if (password.length >= 6) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    
    switch (strength) {
        case 0:
        case 1:
            feedback = 'Muito fraca';
            strengthIndicator.className = 'strength-weak';
            break;
        case 2:
            feedback = 'Fraca';
            strengthIndicator.className = 'strength-weak';
            break;
        case 3:
            feedback = 'Média';
            strengthIndicator.className = 'strength-medium';
            break;
        case 4:
            feedback = 'Forte';
            strengthIndicator.className = 'strength-strong';
            break;
        case 5:
            feedback = 'Muito forte';
            strengthIndicator.className = 'strength-strong';
            break;
    }
    
    strengthIndicator.textContent = feedback;
}

// Show message to user
function showMessage(message, type = 'info') {
    // Remove existing message
    const existingMessage = document.querySelector('.auth-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `auth-message auth-message-${type}`;
    messageDiv.textContent = message;
    
    // Insert message
    const authCard = document.querySelector('.auth-card');
    authCard.insertBefore(messageDiv, authCard.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Show field-specific message
function showFieldMessage(message, type, field) {
    // Remove existing message
    const existingMessage = field.parentNode.querySelector('.field-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `field-message field-message-${type}`;
    messageDiv.textContent = message;
    
    // Insert message after field
    field.parentNode.appendChild(messageDiv);
}

// Hide field-specific message
function hideFieldMessage(field) {
    const message = field.parentNode.querySelector('.field-message');
    if (message) {
        message.remove();
    }
}

// Social login handlers
document.addEventListener('DOMContentLoaded', function() {
    const googleBtn = document.querySelector('.btn-google');
    const facebookBtn = document.querySelector('.btn-facebook');
    
    if (googleBtn) {
        googleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showMessage('Login com Google em desenvolvimento...', 'info');
        });
    }
    
    if (facebookBtn) {
        facebookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showMessage('Login com Facebook em desenvolvimento...', 'info');
        });
    }
});

// Add CSS for messages
const style = document.createElement('style');
style.textContent = `
    .auth-message {
        padding: 1rem;
        border-radius: var(--radius);
        margin-bottom: 1rem;
        font-weight: 500;
    }
    
    .auth-message-info {
        background: rgba(52, 152, 219, 0.1);
        color: #2980b9;
        border: 1px solid rgba(52, 152, 219, 0.3);
    }
    
    .auth-message-success {
        background: rgba(46, 204, 113, 0.1);
        color: #27ae60;
        border: 1px solid rgba(46, 204, 113, 0.3);
    }
    
    .auth-message-error {
        background: rgba(231, 76, 60, 0.1);
        color: #c0392b;
        border: 1px solid rgba(231, 76, 60, 0.3);
    }
    
    .field-message {
        font-size: 0.85rem;
        margin-top: 0.3rem;
        font-weight: 500;
    }
    
    .field-message-error {
        color: #e74c3c;
    }
    
    .field-message-success {
        color: #00B894;
    }
    
    .strength-weak {
        color: #e74c3c;
    }
    
    .strength-medium {
        color: #f39c12;
    }
    
    .strength-strong {
        color: #00B894;
    }
`;
document.head.appendChild(style); 