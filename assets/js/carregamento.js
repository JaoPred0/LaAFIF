document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const loadingText = document.getElementById('loadingText');

    const redirectToPage = () => {
        window.location.href = 'menu.html';
    };

    const randomLoadingTime = Math.floor(Math.random() * 200) + 10;

    let width = 0;
    const interval = 50;
    const maxWidth = 100;
    let progressInterval; // Declarar a variável aqui

    const updateProgressBar = () => {
        if (width >= maxWidth) {
            clearInterval(progressInterval);
            loadingText.textContent = 'Completo';

            setTimeout(redirectToPage, 1000); // Aumentei o delay para 1 segundo para permitir que o texto "Completo" seja visível
        } else {
            width += 5;
            progressBar.style.width = `${width}%`;
        }
    };

    setTimeout(() => {
        progressInterval = setInterval(updateProgressBar, interval); // Inicializar a variável aqui
    }, randomLoadingTime);
});