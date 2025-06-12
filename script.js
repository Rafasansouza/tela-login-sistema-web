// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do formulário
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const loginBtn = document.getElementById('loginBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const rememberCheckbox = document.getElementById('remember');

    // Toggle para mostrar/ocultar senha
    togglePasswordBtn.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });

    // Validação em tempo real
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) || email.length >= 3; // Aceita email ou usuário
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function showFieldError(input, message) {
        removeFieldError(input);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '0.25rem';
        
        input.parentNode.parentNode.appendChild(errorDiv);
        input.style.borderColor = '#e74c3c';
    }

    function removeFieldError(input) {
        const errorDiv = input.parentNode.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
        input.style.borderColor = '#e9ecef';
    }

    function showSuccess(input) {
        removeFieldError(input);
        input.style.borderColor = '#27ae60';
    }

    // Validação em tempo real dos campos
    emailInput.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            showFieldError(this, 'Este campo é obrigatório');
        } else if (!validateEmail(this.value)) {
            showFieldError(this, 'Digite um email válido ou nome de usuário');
        } else {
            showSuccess(this);
        }
    });

    passwordInput.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            showFieldError(this, 'Este campo é obrigatório');
        } else if (!validatePassword(this.value)) {
            showFieldError(this, 'A senha deve ter pelo menos 6 caracteres');
        } else {
            showSuccess(this);
        }
    });

    // Limpar erros quando o usuário começar a digitar
    emailInput.addEventListener('input', function() {
        if (this.style.borderColor === 'rgb(231, 76, 60)') {
            removeFieldError(this);
        }
    });

    passwordInput.addEventListener('input', function() {
        if (this.style.borderColor === 'rgb(231, 76, 60)') {
            removeFieldError(this);
        }
    });

    // Submissão do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let hasErrors = false;

        // Validar campos
        if (email === '') {
            showFieldError(emailInput, 'Este campo é obrigatório');
            hasErrors = true;
        } else if (!validateEmail(email)) {
            showFieldError(emailInput, 'Digite um email válido ou nome de usuário');
            hasErrors = true;
        }

        if (password === '') {
            showFieldError(passwordInput, 'Este campo é obrigatório');
            hasErrors = true;
        } else if (!validatePassword(password)) {
            showFieldError(passwordInput, 'A senha deve ter pelo menos 6 caracteres');
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        // Simular processo de login
        performLogin(email, password);
    });

    function performLogin(email, password) {
        // Mostrar loading
        loginBtn.classList.add('loading');
        loginBtn.disabled = true;

        // Simular chamada para API (2 segundos)
        setTimeout(() => {
            // Remover loading
            loginBtn.classList.remove('loading');
            loginBtn.disabled = false;

            // Simular resposta da API
            if (email === 'admin@salon.com' && password === '123456') {
                showLoginSuccess();
            } else {
                showLoginError('Email/usuário ou senha incorretos');
            }
        }, 2000);
    }

    function showLoginSuccess() {
        // Criar notificação de sucesso
        const successDiv = document.createElement('div');
        successDiv.className = 'login-notification success';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Login realizado com sucesso! Redirecionando...</span>
        `;
        
        addNotificationStyles();
        document.body.appendChild(successDiv);

        // Simular redirecionamento
        setTimeout(() => {
            successDiv.remove();
            alert('Redirecionando para o painel administrativo...\n\nCredenciais de teste:\nEmail: admin@salon.com\nSenha: 123456');
        }, 2000);
    }

    function showLoginError(message) {
        // Criar notificação de erro
        const errorDiv = document.createElement('div');
        errorDiv.className = 'login-notification error';
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
        `;
        
        addNotificationStyles();
        document.body.appendChild(errorDiv);

        // Remover após 4 segundos
        setTimeout(() => {
            errorDiv.remove();
        }, 4000);
    }

    function addNotificationStyles() {
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                .login-notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 1rem 1.5rem;
                    border-radius: 12px;
                    color: white;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    z-index: 1000;
                    animation: slideInRight 0.3s ease-out;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                }
                
                .login-notification.success {
                    background: linear-gradient(135deg, #27ae60, #2ecc71);
                }
                
                .login-notification.error {
                    background: linear-gradient(135deg, #e74c3c, #c0392b);
                }
                
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Carregar dados salvos (se "Lembrar-me" estava marcado)
    function loadSavedCredentials() {
        const savedEmail = localStorage.getItem('salon_saved_email');
        const rememberMe = localStorage.getItem('salon_remember_me') === 'true';
        
        if (rememberMe && savedEmail) {
            emailInput.value = savedEmail;
            rememberCheckbox.checked = true;
        }
    }

    // Salvar credenciais se "Lembrar-me" estiver marcado
    function saveCredentials(email) {
        if (rememberCheckbox.checked) {
            localStorage.setItem('salon_saved_email', email);
            localStorage.setItem('salon_remember_me', 'true');
        } else {
            localStorage.removeItem('salon_saved_email');
            localStorage.removeItem('salon_remember_me');
        }
    }

    // Carregar credenciais salvas ao inicializar
    loadSavedCredentials();

    // Salvar credenciais quando o formulário for submetido com sucesso
    loginForm.addEventListener('submit', function() {
        if (!loginForm.querySelector('.field-error')) {
            saveCredentials(emailInput.value);
        }
    });

    // Efeitos visuais adicionais
    function addInputFocusEffects() {
        const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
        
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentNode.style.transform = 'translateY(-2px)';
                this.parentNode.style.transition = 'transform 0.2s ease';
            });
            
            input.addEventListener('blur', function() {
                this.parentNode.style.transform = 'translateY(0)';
            });
        });
    }

    // Inicializar efeitos
    addInputFocusEffects();

    // Adicionar efeito de ripple nos botões
    function addRippleEffect() {
        const buttons = document.querySelectorAll('.login-btn, .social-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Adicionar CSS para animação de ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Inicializar efeito ripple
    addRippleEffect();

    // Mensagem de boas-vindas
    console.log('🌟 Sistema de Login do Salão de Beleza carregado com sucesso!');
    console.log('💡 Credenciais de teste: admin@salon.com / 123456');
});

