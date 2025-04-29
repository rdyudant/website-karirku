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

    // Fitur bookmark tombol
    const bookmarkButtons = document.querySelectorAll('.btn-outline-secondary');
    bookmarkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.classList.remove('btn-outline-secondary');
                this.classList.add('btn-secondary');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.classList.remove('btn-secondary');
                this.classList.add('btn-outline-secondary');
            }
        });
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

// SIGN.EJS JavaScript
// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('signup-container');

// signUpButton.addEventListener('click', () => {
//     container.classList.add("right-panel-active");
// });
// signInButton.addEventListener('click', () => {
//     container.classList.remove("right-panel-active");
// });

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

// Tombol Back to Top
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
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