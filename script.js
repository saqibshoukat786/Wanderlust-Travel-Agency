document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            // Toggle the 'mobile-menu-show' class to make the menu visible or hide it
            mobileMenu.classList.toggle('mobile-menu-show');
        });

        // Also, close the mobile menu when a link inside it is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('mobile-menu-show');
            });
        });
    }


    // --- Navigation Bar on Scroll ---
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scroll', 'py-2');
            navbar.classList.remove('py-4');
            navLinks.classList.remove('text-white');
            navLinks.classList.add('text-gray-800');
        } else {
            navbar.classList.remove('nav-scroll', 'py-2');
            navbar.classList.add('py-4');
            navLinks.classList.remove('text-gray-800');
            navLinks.classList.add('text-white');
        }
    });


    // --- Intersection Observer for Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('section-title')) {
                    // Delay for the section title underline
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, 300);
                } else {
                    entry.target.classList.add('is-visible');
                }

                // Stagger children of the grid container
                if (entry.target.classList.contains('stagger-in')) {
                    const children = entry.target.querySelectorAll('.animate-on-scroll');
                    children.forEach((child, index) => {
                        child.style.transitionDelay = `${index * 100}ms`;
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with the 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Observe all grid containers with the 'stagger-in' class
    document.querySelectorAll('.stagger-in').forEach(element => {
        observer.observe(element);
    });

    // Observe all section titles
    document.querySelectorAll('.section-title').forEach(element => {
        observer.observe(element);
    });

    // --- Smooth Scrolling for Navigation and Buttons ---
    // This is for links that stay on the same page
    document.querySelectorAll('a.smooth-scroll-link, #nav-links a[href*="#"], #mobile-menu a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const isSamePageLink = targetId.startsWith('#');
            if (isSamePageLink) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    const messageModal = document.getElementById('message-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (contactForm && messageModal) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            // Simulate form submission success
            setTimeout(() => {
                modalMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
                messageModal.classList.add('show');
                contactForm.reset(); // Reset the form
            }, 500);
        });

        closeModalBtn.addEventListener('click', () => {
            messageModal.classList.remove('show');
        });
    }
});