const toggleButton = document.getElementById('change-palette');
const root = document.documentElement;
const favicon = document.getElementById('favicon');
const titleFavicon = document.getElementById('title-favicon');
const body = document.body;
const arrowIcons = document.querySelectorAll('.arrow-icon'); // Selecciona todas las flechas
const themeImage = document.getElementById('theme-image');

// Función para actualizar el tema
function updateTheme(isDark = false) {
    if (isDark) {
        root.style.setProperty('--color-gpwl', '#1a1814'); // Fondo oscuro
        root.style.setProperty('--color-gpbl', '#d8d4d7'); // Texto claro
        if (favicon) favicon.src = "/img/faviconw.svg"; // Logo blanco para tema oscuro
        body.classList.add('dark'); // Añadir clase para tema oscuro

        // Cambiar las flechas a arrowy.svg (amarillo) en modo oscuro
        arrowIcons.forEach(arrow => {
            arrow.src = "./src/assets/img/arrowy.svg";
        });

        // Cambiar la imagen a thumbW.svg para el tema oscuro
        if (themeImage) themeImage.src = './src/assets/img/thumbW.svg';
    } else {
        root.style.setProperty('--color-gpwl', '#d8d4d7'); // Fondo claro
        root.style.setProperty('--color-gpbl', '#1a1814'); // Texto oscuro
        if (favicon) favicon.src = "/img/faviconb.svg"; // Logo negro para tema claro
        body.classList.remove('dark'); // Quitar clase para tema oscuro

        // Cambiar las flechas a arrowp.svg (rosa) en modo claro
        arrowIcons.forEach(arrow => {
            arrow.src = "./src/assets/img/arrowp.svg";
        });

        // Cambiar la imagen a thumbB.svg para el tema claro
        if (themeImage) themeImage.src = './src/assets/img/thumbB.svg';
    }

    localStorage.setItem('isDark', isDark);
}

const svd_isDark = localStorage.getItem('isDark') === 'true';

// Iniciar con el tema claro
updateTheme(svd_isDark);

// Cambiar el tema al interactuar con el botón
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const isDark = body.classList.contains('dark');
        updateTheme(!isDark);
    });
}

// Cambiar el favicon del <title> según la configuración del navegador
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkScheme.matches) {
    if (titleFavicon) titleFavicon.href = "/img/faviconw.svg"; // Favicon blanco para tema oscuro
} else {
    if (titleFavicon) titleFavicon.href = "/img/faviconb.svg"; // Favicon negro para tema claro
}