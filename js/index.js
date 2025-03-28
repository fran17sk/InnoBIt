function toggleMenu() {
    document.getElementById('navModal').classList.toggle('active');
}
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    let icon = document.querySelector('.theme-toggle');
    icon.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    let image = document.querySelector('.theme-image'); // Selecciona la imagen
    if (image) {
        image.src = document.body.classList.contains('light-mode')
            ? './assets/logo-whitemode.png'  // Imagen para el modo claro
            : './assets/logo-darkmode.png'; // Imagen para el modo oscuro
    }
}

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".carousel-indicators button");

function updateIndicators() {
    indicators.forEach((btn, index) => {
        btn.classList.toggle("active", index === currentIndex);
    });
}

function moveSlide(step) {
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    document.getElementById("carouselInner").style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function goToSlide(index) {
    currentIndex = index;
    document.getElementById("carouselInner").style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}
function autoSlide() {
    moveSlide(1);
}

setInterval(autoSlide, 4000);

document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    fadeInElements.forEach(el => observer.observe(el));
});
