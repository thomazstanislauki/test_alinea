const logosContainer = document.querySelector('.clients-logos');
const logos = document.querySelectorAll('.logo-item');

function cloneLogos() {
    const containerWidth = logosContainer.scrollWidth;

    // Duplicando logos até que a largura do contêiner seja maior que o dobro da largura original
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
        scrollAmount -= 0.5; // Ajusta a velocidade da rolagem

        logosContainer.style.transform = `translateX(${scrollAmount}px)`;

        // Reinicia a rolagem quando todo o conteúdo original (e seus clones) já tiver passado
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
