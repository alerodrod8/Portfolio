// Selecciona los elementos necesarios
const imageContents = document.querySelectorAll('.image-content');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const circleButtons = document.querySelectorAll('.circle-button');

let currentIndex = 0; // Índice de la imagen actual

// Función para mostrar la imagen correspondiente
function showImage(index) {
    // Oculta todas las imágenes
    imageContents.forEach((image) => {
        image.classList.remove('active');
    });

    // Muestra la imagen actual
    imageContents[index].classList.add('active');

    // Actualiza el botón activo
    updateActiveButton(index);
}

// Función para actualizar el botón activo
function updateActiveButton(index) {
    circleButtons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Evento para la flecha izquierda
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageContents.length) % imageContents.length; // Ciclo al llegar al inicio
    showImage(currentIndex);
});

// Evento para la flecha derecha
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageContents.length; // Ciclo al llegar al final
    showImage(currentIndex);
});

// Eventos para los botones circulares
circleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

// Muestra la primera imagen al cargar la página
showImage(currentIndex);