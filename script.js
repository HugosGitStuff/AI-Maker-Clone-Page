// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Registration card hover effect
    const registrationCard = document.querySelector('.registration-card');
    if (registrationCard) {
        registrationCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 20px 25px -5px rgba(139, 92, 246, 0.3)';
        });
        
        registrationCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    }

    // Learning cards hover effects
    const learningCards = document.querySelectorAll('.learning-card');
    learningCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    });

    // Syllabus cards hover effects
    const syllabusCards = document.querySelectorAll('.syllabus-card');
    syllabusCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    });

    // Pro cards hover effects
    const proCards = document.querySelectorAll('.pro-card');
    proCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.background = 'rgba(255, 255, 255, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Testimonial cards hover effects
    const testimonialCards = document.querySelectorAll('.testimonial');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Chat widget interactions
    const chatButton = document.querySelector('.chat-button');
    const whatsappButton = document.querySelector('.whatsapp-button');
    
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            // Add your chat functionality here
            console.log('Chat button clicked');
            alert('Chat functionality would be implemented here');
        });
    }
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            // Add your WhatsApp functionality here
            console.log('WhatsApp button clicked');
            alert('WhatsApp functionality would be implemented here');
        });
    }

    // Register button functionality
    const registerButtons = document.querySelectorAll('.register-btn, .reserve-btn, .register-now-btn');
    registerButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your registration functionality here
            console.log('Register button clicked');
            alert('Registration functionality would be implemented here');
        });
    });

    // Brochure download functionality
    const brochureButtons = document.querySelectorAll('.brochure-btn, .download-brochure-btn');
    brochureButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your brochure download functionality here
            console.log('Brochure download button clicked');
            alert('Brochure download functionality would be implemented here');
        });
    });

    // Video unmute functionality
    const unmuteBtn = document.querySelector('.unmute-btn');
    if (unmuteBtn) {
        unmuteBtn.addEventListener('click', function() {
            // Add your video unmute functionality here
            console.log('Unmute button clicked');
            this.textContent = this.textContent === 'Unmute' ? 'Mute' : 'Unmute';
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Form validation (if forms are added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Escape key to close any modals or overlays
        if (e.key === 'Escape') {
            console.log('Escape key pressed');
        }
        
        // Enter key for buttons
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.tagName === 'BUTTON') {
                focusedElement.click();
            }
        }
    });

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(function() {
        // Add any scroll-based functionality here
        console.log('Scroll event debounced');
    }, 100);

    window.addEventListener('scroll', debouncedScrollHandler);

    // Accessibility improvements
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('button, a, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #8b5cf6';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    console.log('AI Maker Bootcamp website loaded successfully!');
}); 