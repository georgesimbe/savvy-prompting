document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Modal functionality
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const closeLoginModal = document.getElementById('close-login-modal');
    const closeRegisterModal = document.getElementById('close-register-modal');

    function openModal(modal) {
        modal.classList.remove('hidden');
    }

    function closeModal(modal) {
        modal.classList.add('hidden');
    }

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(loginModal);
    });

    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(registerModal);
    });

    closeLoginModal.addEventListener('click', () => closeModal(loginModal));
    closeRegisterModal.addEventListener('click', () => closeModal(registerModal));

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) closeModal(loginModal);
        if (e.target === registerModal) closeModal(registerModal);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation and submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement form validation and submission logic here
        console.log('Contact form submitted');
        contactForm.reset();
    });

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement login logic here
        console.log('Login form submitted');
        closeModal(loginModal);
    });

    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement registration logic here
        console.log('Register form submitted');
        closeModal(registerModal);
    });

    // Prompt Analyzer functionality (placeholder implementation)
    const analyzeButton = document.getElementById('analyze-button');
    const promptInput = document.getElementById('prompt-input');
    const tokenCount = document.getElementById('token-count');
    const estimatedTime = document.getElementById('estimated-time');
    const clarityScore = document.getElementById('clarity-score');
    const suggestions = document.getElementById('suggestions');

    analyzeButton.addEventListener('click', () => {
        const prompt = promptInput.value;
        // Implement actual analysis logic here
        tokenCount.textContent = `Token Count: ${prompt.split(' ').length}`;
        estimatedTime.textContent = 'Estimated Time: 2 seconds';
        clarityScore.textContent = 'Clarity Score: 8/10';
        suggestions.textContent = 'Suggestion: Consider adding more context to your prompt.';
    });

    // PromptBench functionality (placeholder implementation)
    const evaluateButton = document.getElementById('evaluate-button');
    const promptBenchInput = document.getElementById('promptbench-input');
    const promptBenchResults = document.getElementById('promptbench-results');

    evaluateButton.addEventListener('click', () => {
        const prompts = promptBenchInput.value.split('\n');
        // Implement actual evaluation logic here
        const results = prompts.map(prompt => ({
            prompt,
            score: Math.floor(Math.random() * 100) + 1
        }));
        
        promptBenchResults.innerHTML = results.map(result => 
            `<p>Prompt: "${result.prompt}" - Score: ${result.score}</p>`
        ).join('');
    });
});