// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.card'));
    const flipButton = document.getElementById('flipButton');

    flipButton.addEventListener('click', () => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('flipped');
            }, index * 300); // 300msの間隔でカードを順番にフリップ
        });
    });
});
