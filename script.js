document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Transform hamburger to X
        const bars = menuBtn.querySelectorAll('.bar');
        if(navLinks.classList.contains('active')) {
             bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
             bars[1].style.opacity = '0';
             bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
             bars[0].style.transform = 'none';
             bars[1].style.opacity = '1';
             bars[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-up, .reveal-left, .reveal-right, .reveal-up');
    animatedElements.forEach(el => observer.observe(el));

    // 4. Number Counter Animation
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;
    
    const statsSection = document.querySelector('.stats');
    
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
             counters.forEach(counter => {
                 const target = +counter.getAttribute('data-target');
                 const duration = 2000; // ms
                 const increment = target / (duration / 16); // 60fps
                 
                 let current = 0;
                 const updateCounter = () => {
                     current += increment;
                     if (current < target) {
                         counter.innerText = Math.ceil(current);
                         requestAnimationFrame(updateCounter);
                     } else {
                         counter.innerText = target; // Ensure exact number
                     }
                 };
                 updateCounter();
             });
             hasCounted = true;
        }
    }, { threshold: 0.5 });
    
    if(statsSection) {
        statsObserver.observe(statsSection);
    }
});
