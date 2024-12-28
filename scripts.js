document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // Fade out duration
        }, 500); // Minimum display time
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger i');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for header height if needed
                behavior: 'smooth'
            });
            // Close mobile nav after clicking
            if (window.innerWidth < 769) {
                nav.style.display = 'none';
            }
        });
    });

    // Scroll Animations (Example - More advanced animations with AOS are included)
    const sections = document.querySelectorAll('section');
    const fadeInElements = document.querySelectorAll('.service-item, .why-us-item');

    const observerOptions = {
        threshold: 0.3 // Trigger animation when 30% of the element is visible
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in'); // Add a class to trigger CSS animation
                // observer.unobserve(entry.target); // Unobserve if you want the animation to happen only once
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    fadeInElements.forEach(element => {
        sectionObserver.observe(element);
    });

    // Portfolio "Load More" Functionality (Basic Example)
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const loadMoreButton = document.querySelector('.load-more');
    let itemsToShow = 3; // Initially show 3 items

    if (portfolioGrid && loadMoreButton) {
        const portfolioItems = Array.from(portfolioGrid.children);
        portfolioItems.slice(itemsToShow).forEach(item => item.style.display = 'none');

        loadMoreButton.addEventListener('click', () => {
            itemsToShow += 3;
            portfolioItems.slice(0, itemsToShow).forEach(item => item.style.display = 'block');
            if (itemsToShow >= portfolioItems.length) {
                loadMoreButton.style.display = 'none';
            }
        });
    }

    // Contact Form Submission (Basic Example)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Basic validation (you should implement proper server-side validation)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
                formMessage.classList.add('success');
                contactForm.reset();
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.classList.remove('success');
                }, 5000); // Clear message after 5 seconds
            } else {
                formMessage.textContent = 'Please fill out all fields.';
                formMessage.classList.add('error');
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.classList.remove('error');
                }, 3000);
            }
        });
    }
});
