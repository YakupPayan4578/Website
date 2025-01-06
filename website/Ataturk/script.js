// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic header background
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Image lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

// Optional: Add a simple image modal
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.background = 'rgba(0,0,0,0.9)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1001';

        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.maxHeight = '90vh';
        modalImg.style.maxWidth = '90vw';
        modalImg.style.objectFit = 'contain';

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        modal.addEventListener('click', function() {
            modal.remove();
        });
    });
});

const quotes = [
    "Beni görmek demek mutlaka yüzümü görmek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu kafidir.",
    "Yurtta sulh, cihanda sulh.",
    "Hayatta en hakiki mürşit ilimdir.",
    "Bir ulus sanattan ve sanatçıdan yoksunsa, tam bir hayata sahip olamaz.",
    "Özgürlük ve bağımsızlık benim karakterimdir.",
    "Egemenlik kayıtsız şartsız milletindir.",
    "Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır.",
    "Gençliği yetiştiriniz. Onlara ilim ve irfanın müspet fikirlerini veriniz. İstikbalin aydınlığına onlarla kavuşacaksınız.",
    "Türk, öğün, çalış, güven.",
    "Büyük olmak için hiç kimseye iltifat etmeyeceksin, hiç kimseyi aldatmayacaksın, memleket için gerçek ülkü ne ise onu görecek, o hedefe yürüyeceksin.",
    "En büyük savaş, cahilliğe karşı yapılan savaştır.",
    "Cumhuriyet, fikir serbestliği taraftarıdır. Samimi ve meşru olmak şartıyla her fikre hürmet ederiz."
];

// Function to display a random quote
function displayRandomQuote() {
    const quoteElement = document.getElementById('rotating-quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Add fade-out effect
    quoteElement.style.opacity = '0';
    
    // Change quote and fade in after a short delay
    setTimeout(() => {
        quoteElement.textContent = quotes[randomIndex];
        quoteElement.style.opacity = '1';
    }, 500);
}

// Display initial quote when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayRandomQuote();
    
    document.getElementById('next-quote').addEventListener('click', (e) => {
        e.preventDefault();
        displayRandomQuote();
        
        // Add click animation to the arrow
        const arrow = document.getElementById('next-quote');
        arrow.style.transform = 'translateY(5px)';
        setTimeout(() => {
            arrow.style.transform = 'translateY(0)';
        }, 200);
    });
});

// Optional: Change quote automatically every 10 seconds
// setInterval(displayRandomQuote, 10000); 