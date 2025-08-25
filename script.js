//  JavaScript for Mobile Menu, Navbar Scroll and Animations 
// (Index.html)
document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        if (mobileMenu.style.maxHeight === '0px' || mobileMenu.style.maxHeight === '') {
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        } else {
            mobileMenu.style.maxHeight = '0';
        }
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.maxHeight = '0';
        });
    });

    // --- Sticky Navbar on Scroll ---
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('nav-links');
    const navBrand = navbar.querySelector('a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scroll');
            navLinks.querySelectorAll('a').forEach(link => link.classList.remove('text-white'));
            navLinks.querySelectorAll('a').forEach(link => link.classList.add('text-gray-800'));
            navBrand.classList.remove('text-white');
            navBrand.classList.add('text-gray-800');
        } else {
            navbar.classList.remove('nav-scroll');
            navLinks.querySelectorAll('a').forEach(link => link.classList.remove('text-gray-800'));
            navLinks.querySelectorAll('a').forEach(link => link.classList.add('text-white'));
            navBrand.classList.remove('text-gray-800');
            navBrand.classList.add('text-white');
        }
    });

    // --- Contact Form Submission & Modal ---
    const contactForm = document.getElementById('contact-form');
    const messageModal = document.getElementById('message-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModalBtn = document.getElementById('close-modal-btn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Show a success message in the modal
        modalMessage.textContent = "Your message has been sent successfully!";
        messageModal.classList.add('show');

        // Reset the form
        contactForm.reset();
    });

    closeModalBtn.addEventListener('click', () => {
        messageModal.classList.remove('show');
    });

    // --- Image Fallback (More Robust) ---
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function () {
            // Replace the image with a fallback div
            this.outerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg text-gray-500 text-sm">
                            Image Unavailable
                        </div>
                    `;
        };
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the animation
                entry.target.classList.add('is-visible');

                // Handle staggered animations for grids
                const staggeredElements = entry.target.querySelectorAll('.stagger-in > *');
                staggeredElements.forEach((el, elIndex) => {
                    el.style.transitionDelay = `${elIndex * 0.1}s`;
                });

                // Stop observing once the animation is triggered
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
});

// About.html
// JavaScript for Mobile Menu & Animations
        document.addEventListener('DOMContentLoaded', function () {
            // --- Mobile Menu Toggle ---
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuBtn.addEventListener('click', () => {
                if (mobileMenu.style.maxHeight === '0px' || mobileMenu.style.maxHeight === '') {
                    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                } else {
                    mobileMenu.style.maxHeight = '0';
                }
            });

            // Close mobile menu when a link is clicked
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.style.maxHeight = '0';
                });
            });

            // --- Image Fallback (More Robust) ---
            document.querySelectorAll('img').forEach(img => {
                img.onerror = function() {
                    // Replace the image with a fallback div
                    this.outerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg text-gray-500 text-sm">
                            Image Unavailable
                        </div>
                    `;
                };
            });

            // --- Intersection Observer for Scroll Animations ---
            const observerOptions = {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'is-visible' class to trigger the animation
                        entry.target.classList.add('is-visible');

                        // Handle staggered animations for grids
                        const staggeredElements = entry.target.querySelectorAll('.stagger-in > *');
                        staggeredElements.forEach((el, elIndex) => {
                            el.style.transitionDelay = `${elIndex * 0.1}s`;
                        });

                        // Stop observing once the animation is triggered
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
        });