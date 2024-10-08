const logosContainer = document.querySelector('.clients-logos');
const logos = document.querySelectorAll('.logo-item');

function cloneLogos() {
    const containerWidth = logosContainer.scrollWidth;

    // Clonando o conjunto de logos até que o total ultrapasse o dobro da largura original
    while (logosContainer.scrollWidth < containerWidth * 2) {
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            logosContainer.appendChild(clone);
        });
    }
}

function autoScrollLogos() {
    let scrollAmount = 0;

    function scroll() {
        scrollAmount -= 0.3; // Ajusta a velocidade da rolagem

        logosContainer.style.transform = `translateX(${scrollAmount}px)`;

        // Reinicia a rolagem quando toda a primeira sequência de logos passar
        if (Math.abs(scrollAmount) >= logosContainer.scrollWidth / 2) {
            scrollAmount = 0; // Reseta o scroll para um loop contínuo
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}

// Clona as logos e garante que o loop seja contínuo
cloneLogos();
// Inicia a rolagem automática
autoScrollLogos();

const slides = document.querySelectorAll('.news-slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
}

document.querySelector('.next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        showSlide(i);
        currentSlide = i;
    });
});

// Iniciar com o primeiro slide ativo
showSlide(currentSlide);
