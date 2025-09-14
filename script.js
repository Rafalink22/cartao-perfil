document.addEventListener('DOMContentLoaded', () => {

    const track = document.querySelector('.slider-track');
    const cards = Array.from(track.children);
    const nextButton = document.querySelector('.slider-button.next');
    const prevButton = document.querySelector('.slider-button.prev');

    // Largura de um card + suas margens laterais (400px de width + 15px de cada lado)
    const cardWidth = cards[0].offsetWidth + 30;
    
    // Quantos cards queremos visíveis por vez
    const cardsPerView = 3;
    
    let currentIndex = 0;

    // Função para mover o trilho
    const moveToSlide = (targetIndex) => {
        const offset = targetIndex * cardWidth;
        track.style.transform = `translateX(-${offset}px)`;
        currentIndex = targetIndex;
        updateButtons();
    }

    // Função para mostrar/esconder botões
    const updateButtons = () => {
        // Esconde o botão 'prev' se estivermos no início
        if (currentIndex === 0) {
            prevButton.classList.add('hidden');
        } else {
            prevButton.classList.remove('hidden');
        }

        // Esconde o botão 'next' se estivermos no final
        // O último índice possível é o total de cards menos o número de cards visíveis
        const lastSlideIndex = cards.length - cardsPerView;
        if (currentIndex === lastSlideIndex) {
            nextButton.classList.add('hidden');
        } else {
            nextButton.classList.remove('hidden');
        }
    }

    // Event listener para o botão 'próximo'
    nextButton.addEventListener('click', () => {
        const lastSlideIndex = cards.length - cardsPerView;
        if (currentIndex < lastSlideIndex) {
            moveToSlide(currentIndex + 1);
        }
    });

    // Event listener para o botão 'anterior'
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        }
    });

    // Estado inicial dos botões ao carregar a página
    updateButtons();

});