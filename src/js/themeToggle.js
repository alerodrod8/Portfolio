// theme-toggle.js
const toggleButton = document.getElementById('change-palette');
const root = document.documentElement;
const favicon = document.getElementById('favicon');
const titleFavicon = document.getElementById('title-favicon');
const body = document.body;
const arrowIcons = document.querySelectorAll('.arrow-icon'); // Selecciona todas las flechas
const themeImage = document.getElementById('theme-image');

// Función para actualizar el tema
function updateTheme(isDark) {
    if (isDark) {
        root.style.setProperty('--color-p1w', '#1a1814'); // Fondo oscuro
        root.style.setProperty('--color-p1b', '#d8d4d7'); // Texto claro
        if (favicon) favicon.src = "/faviconw.svg"; // Logo blanco para tema oscuro
        body.classList.add('dark'); // Añadir clase para tema oscuro

        // Cambiar las flechas a arrowy.svg (amarillo) en modo oscuro
        arrowIcons.forEach(arrow => {
            arrow.src = "./src/assets/arrowy.svg";
        });

        // Cambiar la imagen a thumbW.svg para el tema oscuro
        updateImageForTheme('dark');
    } else {
        root.style.setProperty('--color-p1w', '#d8d4d7'); // Fondo claro
        root.style.setProperty('--color-p1b', '#1a1814'); // Texto oscuro
        if (favicon) favicon.src = "/faviconb.svg"; // Logo negro para tema claro
        body.classList.remove('dark'); // Quitar clase para tema oscuro

        // Cambiar las flechas a arrowp.svg (rosa) en modo claro
        arrowIcons.forEach(arrow => {
            arrow.src = "./src/assets/arrowp.svg";
        });

        // Cambiar la imagen a thumbB.svg para el tema claro
        updateImageForTheme('light');
    }
}

// Función para actualizar la imagen según el tema
function updateImageForTheme(theme) {
    if (theme === 'dark') {
        themeImage.src = './src/assets/img/thumbW.svg'; // Imagen para tema oscuro
    } else {
        themeImage.src = './src/assets/img/thumbB.svg'; // Imagen para tema claro
    }
}

// Iniciar con el tema claro
updateTheme(false);

// Cambiar el tema al interactuar con el botón
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const isDark = root.style.getPropertyValue('--color-p1w') === '#1a1814';
        updateTheme(!isDark);
    });
}

// Cambiar el favicon del <title> según la configuración del navegador
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkScheme.matches) {
    if (titleFavicon) titleFavicon.href = "/faviconw.svg"; // Favicon blanco para tema oscuro
} else {
    if (titleFavicon) titleFavicon.href = "/faviconb.svg"; // Favicon negro para tema claro
}