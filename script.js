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
        if (navLinks.classList.contains('active')) {
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

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // 5. Language Switcher
    const translations = {
        'id': {
            'nav.home': 'Beranda',
            'nav.about': 'Tentang Kami',
            'nav.services': 'Layanan',
            'nav.advantages': 'Keunggulan',
            'nav.contact': 'Hubungi Kami',
            'header.subtitle': 'General Trading & Services',
            'hero.title': 'Mitra Terpercaya dalam<br> <span class="text-gold">Perdagangan & Jasa Global</span>',
            'hero.desc': 'Melayani dengan profesionalisme tinggi dan pengalaman lebih dari 20 tahun dalam solusi pengadaan dan distribusi yang andal.',
            'hero.cta_primary': 'Pelajari Lebih Lanjut',
            'hero.cta_secondary': 'Konsultasi Sekarang',
            'about.subtitle': 'Tentang Perusahaan',
            'about.title': 'Dedikasi untuk Kualitas & Kepercayaan',
            'about.exp': 'Tahun<br>Pengalaman',
            'about.p1': 'PT Banyumas Arga Resty adalah perusahaan perdagangan umum barang dan jasa yang telah beroperasi lebih dari 20 tahun dan terdaftar secara resmi sebagai perseroan terbatas di Indonesia.',
            'about.p2': 'Kami berkomitmen melayani dengan profesional, mengutamakan kepercayaan, ketepatan waktu, serta hubungan jangka panjang dengan mitra dan pelanggan. Dengan jaringan yang luas dan pemahaman kuat terhadap kebutuhan pasar, kami siap menjadi partner strategis bisnis Anda.',
            'about.val1_title': 'Profesional',
            'about.val1_desc': 'Standar kerja tinggi',
            'about.val2_title': 'Tepat Waktu',
            'about.val2_desc': 'Disiplin & Efisien',
            'services.subtitle': 'Layanan Kami',
            'services.title': 'Solusi Bisnis Komprehensif',
            'services.desc': 'Kami menyediakan berbagai solusi pengadaan dan distribusi untuk mendukung operasional bisnis Anda.',
            'services.s1_title': 'Perdagangan Umum',
            'services.s1_desc': 'Penyediaan berbagai macam barang kebutuhan industri dan komersial dengan kualitas terbaik dan harga kompetitif.',
            'services.s2_title': 'Jasa Pengadaan',
            'services.s2_desc': 'Layanan procurement end-to-end yang efisien untuk memastikan ketersediaan material dan peralatan usaha Anda.',
            'services.s3_title': 'Distribusi & Logistik',
            'services.s3_desc': 'Jaringan distribusi luas yang menjamin pengiriman tepat waktu ke berbagai wilayah dengan aman.',
            'services.s3_short': 'Distribusi',
            'stats.years': 'Tahun Pengalaman',
            'stats.partners': 'Mitra Bisnis',
            'stats.satisfaction': 'Persen Kepuasan',
            'adv.subtitle': 'Keunggulan Kami',
            'adv.title': 'Mengapa Memilih PT Banyumas Arga Resty?',
            'adv.desc': 'Kami memahami bahwa kepercayaan adalah modal utama dalam bisnis. Berikut adalah alasan mengapa kami adalah mitra yang tepat untuk Anda:',
            'adv.a1_title': 'Legalitas Terjamin',
            'adv.a1_desc': 'Perusahaan resmi berbadan hukum Perseroan Terbatas (PT).',
            'adv.a2_title': 'Jaringan Luas',
            'adv.a2_desc': 'Koneksi bisnis yang kuat di berbagai sektor industri.',
            'adv.a3_title': 'Tim Berpengalaman',
            'adv.a3_desc': 'Didukung oleh tenaga ahli yang kompeten di bidangnya.',
            'cta.title': 'Siap Mengembangkan Bisnis Bersama Kami?',
            'cta.desc': 'Hubungi kami hari ini untuk mendiskusikan kebutuhan pengadaan dan distribusi perusahaan Anda.',
            'cta.btn': 'Hubungi Kami',
            'contact.address_title': 'Alamat Kantor',
            'contact.address_val': 'Jl. Contoh Raya No. 123, Banyumas,<br>Jawa Tengah, Indonesia',
            'contact.email_title': 'Email',
            'contact.phone_title': 'Telepon',
            'contact.ph_name': 'Nama Lengkap',
            'contact.ph_email': 'Email Perusahaan',
            'contact.ph_subject': 'Subjek',
            'contact.opt_general': 'Pertanyaan Umum',
            'contact.opt_quote': 'Permintaan Penawaran',
            'contact.opt_partner': 'Menjalin Kerja Sama',
            'contact.ph_msg': 'Pesan Anda',
            'contact.btn_submit': 'Kirim Pesan',
            'footer.desc': 'Mitra terpercaya dalam solusi perdagangan umum dan jasa. Berpengalaman, profesional, dan berdedikasi untuk kesuksesan bersama.',
            'footer.links_title': 'Tautan Cepat',
            'footer.consult': 'Konsultasi Bisnis'
        },
        'en': {
            'nav.home': 'Home',
            'nav.about': 'About Us',
            'nav.services': 'Services',
            'nav.advantages': 'Advantages',
            'nav.contact': 'Contact Us',
            'header.subtitle': 'General Trading & Services',
            'hero.title': 'Your Trusted Partner in<br> <span class="text-gradient-animated">Global Trade & Services</span>',
            'hero.desc': 'Serving with high professionalism and over 20 years of experience in reliable procurement and distribution solutions.',
            'hero.cta_primary': 'Learn More',
            'hero.cta_secondary': 'Consult Now',
            'about.subtitle': 'About Company',
            'about.title': 'Dedication to Quality & Trust',
            'about.exp': 'Years of<br>Experience',
            'about.p1': 'PT Banyumas Arga Resty is a general trading and services company that has been operating for <span class="highlight-text">over 20 years</span> and is officially registered as a limited liability company in Indonesia.',
            'about.p2': 'We are committed to serving with <span class="highlight-text">professionalism</span>, prioritizing trust, punctuality, and long-term relationships with partners and customers. With an extensive network and strong market understanding, we are ready to be your strategic business partner.',
            'about.val1_title': 'Professional',
            'about.val1_desc': 'High working standards',
            'about.val2_title': 'Punctual',
            'about.val2_desc': 'Disciplined & Efficient',
            'services.subtitle': 'Our Services',
            'services.title': 'Comprehensive Business Solutions',
            'services.desc': 'We provide various procurement and distribution solutions to support your business operations.',
            'services.s1_title': 'General Trading',
            'services.s1_desc': 'Provision of various industrial and commercial goods with the best quality and competitive prices.',
            'services.s2_title': 'Procurement Services',
            'services.s2_desc': 'Efficient end-to-end procurement services to ensure the availability of material and equipment for your business.',
            'services.s3_title': 'Distribution & Logistics',
            'services.s3_desc': 'Extensive distribution network ensuring timely delivery to various regions safely.',
            'services.s3_short': 'Distribution',
            'stats.years': 'Years Experience',
            'stats.partners': 'Business Partners',
            'stats.satisfaction': 'Satisfaction Rate',
            'adv.subtitle': 'Our Advantages',
            'adv.title': 'Why Choose PT Banyumas Arga Resty?',
            'adv.desc': 'We understand that trust is the main capital in business. Here are the reasons why we are the right partner for you:',
            'adv.a1_title': 'Legality Guaranteed',
            'adv.a1_desc': 'Officially registered Limited Liability Company (PT).',
            'adv.a2_title': 'Extensive Network',
            'adv.a2_desc': 'Strong business connections in various industrial sectors.',
            'adv.a3_title': 'Experienced Team',
            'adv.a3_desc': 'Supported by experts competent in their fields.',
            'cta.title': 'Ready to Grow Your Business With Us?',
            'cta.desc': 'Contact us today to discuss your company\'s procurement and distribution needs.',
            'cta.btn': 'Contact Us',
            'contact.address_title': 'Office Address',
            'contact.address_val': 'Jl. Contoh Raya No. 123, Banyumas,<br>Central Java, Indonesia',
            'contact.email_title': 'Email',
            'contact.phone_title': 'Phone',
            'contact.ph_name': 'Full Name',
            'contact.ph_email': 'Company Email',
            'contact.ph_subject': 'Subject',
            'contact.opt_general': 'General Inquiry',
            'contact.opt_quote': 'Request Quotation',
            'contact.opt_partner': 'Partnership Opportunity',
            'contact.ph_msg': 'Your Message',
            'contact.btn_submit': 'Send Message',
            'footer.desc': 'Trusted partner in general trading and services solutions. Experienced, professional, and dedicated to mutual success.',
            'footer.links_title': 'Quick Links',
            'footer.consult': 'Business Consultation'
        }
    };

    let currentLang = 'id';
    const langToggle = document.getElementById('lang-toggle');
    const updateLang = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        langToggle.innerText = lang === 'id' ? 'EN' : 'ID';
        currentLang = lang;
    };

    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'id' ? 'en' : 'id';
        updateLang(newLang);
    });
});
