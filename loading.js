document.addEventListener("DOMContentLoaded", () => {

    const loading = document.getElementById("loading");
    const progress = document.getElementById("progress");
    const percentage = document.getElementById("percentage");
    const loadingText = document.getElementById("loading-text");
    const site = document.getElementById("site");

    let value = 0;

    const messages = [
        "Preparando tudo para você...",
        "Carregando recursos...",
        "Configurando experiência...",
        "Quase pronto...",
        "Tudo pronto!"
    ];

    const interval = setInterval(() => {

        value += Math.floor(Math.random() * 8) + 3;

        if (value >= 100) {
            value = 100;
        }

        progress.style.width = `${value}%`;
        percentage.textContent = `${value}%`;

        const messageIndex = Math.min(
            Math.floor(value / 25),
            messages.length - 1
        );

        loadingText.textContent = messages[messageIndex];

        if (value >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                loading.classList.add("hidden");

                site.classList.add("visible");

            }, 500);
        }

    }, 100);

});
