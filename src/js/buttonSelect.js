// Selecciona todos los botones circulares
const buttons = document.querySelectorAll('.circle-button');

// Añade un event listener a cada botón
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remueve la clase 'active' de todos los botones
    buttons.forEach(btn => btn.classList.remove('active'));
    // Añade la clase 'active' solo al botón clicado
    button.classList.add('active');
  });
});