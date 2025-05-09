// INDEX.EJS JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll untuk anchor link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Tampilkan badge "New" untuk lowongan baru
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => {
        const postedText = card.querySelector('.posted').textContent.trim();
        if (postedText === 'Baru') {
            const badge = document.createElement('span');
            badge.classList.add(
                'position-absolute', 'top-0', 'end-0', 'translate-middle', 
                'badge', 'rounded-pill', 'bg-danger'
            );
            badge.innerHTML = 'New';
            card.classList.add('position-relative');
            card.appendChild(badge);
        }
    });

    // Animasi hover di category card
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(255, 90, 95, 0.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
    });
    
});

// Loading animation
window.addEventListener('load', function() {
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        loader.style.transition = 'all 0.5s ease';
    }
});
window.addEventListener('scroll', function() {
    const scrollBar = document.getElementById('scroll-progress-bar');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollBar.style.width = `${scrollPercent}%`;
});    

// Hide Password
document.querySelectorAll('.toggle-password').forEach(function (icon) {
    icon.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('data-target'));
        const type = target.getAttribute('type') === 'password' ? 'text' : 'password';
        target.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});

// Animation Of Scroll
AOS.init({
    duration: 800, // Durasi animasi dalam ms
    once: true     // Animasi hanya jalan sekali (tidak diulang saat scroll balik)
});

// Tombol Back to Top
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Efek title berjalan
// let titleText = document.title + " || ";
// let scrollPos = 0;

// function scrollTitle() {
//     document.title = titleText.substring(scrollPos) + titleText.substring(0, scrollPos);
//     scrollPos = (scrollPos + 1) % titleText.length;
//     setTimeout(scrollTitle, 200); // kecepatan scroll
// }
// scrollTitle();