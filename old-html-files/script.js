// Main application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // Animate stats on scroll
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat strong');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent.replace('$', ''));
            const isPrice = stat.textContent.includes('$');
            let current = 0;
            const increment = target / 50;
            
            const updateStat = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = isPrice ? `$${Math.floor(current)}` : Math.floor(current);
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = isPrice ? `$${target}` : target;
                }
            };
            
            updateStat();
        });
    };
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate stats when they come into view
                if (entry.target.classList.contains('hero-stats')) {
                    setTimeout(animateStats, 500);
                }
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .pricing-card, .hero-stats');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Form validation helpers
    window.validateEmail = function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    
    // Local storage helpers
    window.storage = {
        set: function(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        get: function(key) {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        },
        remove: function(key) {
            localStorage.removeItem(key);
        }
    };
    
    // Check authentication status
    window.checkAuth = function() {
        return localStorage.getItem('isLoggedIn') === 'true';
    };
    
    // Logout function
    window.logout = function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
        window.location.href = 'index.html';
    };
    
    // Demo video play functionality
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Demo video would play here. In the full version, this would show a product walkthrough video.');
        });
    });
    
    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('popular')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
});

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
}

// Show notification (for demo purposes)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}