// ============================================
// FUTURISTIC PORTFOLIO INTERACTIVITY
// ============================================

// Rotating Hero Slogans
const slogans = [
    "Where creativity meets security, innovation is born.",
    "Crafting experiences, defending systems.",
    "Designing the future, protecting the present.",
    "Pixel-perfect design meets bulletproof security.",
    "Building beautiful interfaces, securing critical infrastructure.",
    "The intersection of aesthetics and defense.",
    "Creating experiences, eliminating vulnerabilities.",
    "Design with purpose, secure by design.",
    "Visual storytelling meets digital fortification.",
    "Where user experience meets threat intelligence."
];

let currentSloganIndex = 0;
const sloganElement = document.getElementById('rotating-slogan');

function rotateSlogan() {
    if (sloganElement) {
        sloganElement.style.opacity = '0';
        setTimeout(() => {
            currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
            sloganElement.textContent = slogans[currentSloganIndex];
            sloganElement.style.opacity = '1';
        }, 500);
    }
}

// Rotate slogan every 4 seconds
if (sloganElement) {
    setInterval(rotateSlogan, 4000);
}

// Micro-interaction Messages
const microMessages = [
    "Initializing...",
    "Scanning Identity...",
    "Access Granted",
    "System Online",
    "Connection Established",
    "Loading Interface...",
    "Verifying Credentials...",
    "Data Stream Active",
    "Protocol Engaged",
    "System Ready"
];

const microInteraction = document.getElementById('micro-interaction');
const microText = document.getElementById('micro-text');

function showMicroInteraction(message) {
    if (microInteraction && microText) {
        microText.textContent = message;
        microInteraction.classList.add('show');
        setTimeout(() => {
            microInteraction.classList.remove('show');
        }, 2000);
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Show micro-interaction
            const randomMessage = microMessages[Math.floor(Math.random() * microMessages.length)];
            showMicroInteraction(randomMessage);
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate project cards, skill cards, and other elements
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-card, .contact-link, .experience-card, .info-card, .achievement-card, .cert-card, .engagement-item, .proficiency-card, .skill-category-cyber'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate path cards with delay
    const pathCards = document.querySelectorAll('.path-card');
    pathCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const particles = hero.querySelector('.particles');
        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// 3D Satellite Mouse Interaction
const satellite = document.querySelector('.satellite');
if (satellite) {
    document.addEventListener('mousemove', (e) => {
        const rect = satellite.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const rotateX = (y / rect.height) * 20;
        const rotateY = (x / rect.width) * 20;
        
        satellite.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
}

// Path Card Hover Effects
document.querySelectorAll('.path-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project Card Interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const projectType = this.querySelector('.project-type');
        if (projectType) {
            projectType.style.transform = 'scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const projectType = this.querySelector('.project-type');
        if (projectType) {
            projectType.style.transform = 'scale(1)';
        }
    });
});

// Skill Tag Hover Effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-2px)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Show micro-interaction on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        showMicroInteraction('System Ready');
    }, 500);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    }
});

// Contact link interactions
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const randomMessage = microMessages[Math.floor(Math.random() * microMessages.length)];
        showMicroInteraction(randomMessage);
    });
});

// Section transition effects
const sections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Show different micro-interaction based on section
            if (entry.target.id === 'design') {
                showMicroInteraction('Design Module Active');
            } else if (entry.target.id === 'cybersecurity') {
                showMicroInteraction('Security Module Active');
            }
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Animate stars on scroll
window.addEventListener('scroll', () => {
    const stars = document.querySelector('.stars');
    if (stars) {
        const scrolled = window.pageYOffset;
        stars.style.transform = `translateY(${scrolled * 0.3}px)`;
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

// Optimized scroll handler
const optimizedScroll = debounce(() => {
    // Additional scroll-based animations can go here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// Console message (for developers)
console.log('%c🚀 Portfolio System Initialized', 'color: #00ffff; font-size: 16px; font-weight: bold;');
console.log('%cSystem Status: OPERATIONAL', 'color: #00ff88; font-size: 12px;');
console.log('%cAccess Granted', 'color: #ff00ff; font-size: 12px;');
console.log('%cDesign & Cybersecurity Modules Loaded', 'color: #4a9eff; font-size: 12px;');

