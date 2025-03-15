// Importar las traducciones
import { translations } from '../../styles/translations/translations.js';

document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('change-language');
    const languageIcon = document.getElementById('language-icon');
    const paletteButton = document.getElementById('change-palette'); // Botón de paleta
    let currentLanguage = localStorage.getItem('language') || 'en'; // Idioma por defecto: inglés

    // Función para aplicar las traducciones a los elementos marcados
    function applyTranslations() {
        const langTranslations = translations[currentLanguage]; // Traducciones del idioma actual
        // Selecciona todos los elementos con el atributo data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate'); // Obtiene la clave de traducción
            if (langTranslations[key]) {
                // Reemplaza el contenido del elemento con la traducción correspondiente
                element.textContent = langTranslations[key];
            }
        });
    }

    // Función para actualizar el idioma en la interfaz
    function updateLanguage() {
        // Cambiar la imagen del botón
        languageIcon.src = `./src/assets/img/${currentLanguage}.svg`;
        languageIcon.alt = currentLanguage === 'en' ? 'English' : 'Español';

        // Aplicar las traducciones al HTML
        applyTranslations();
    }

    // Cambiar idioma al hacer clic en el botón
    languageButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en'; // Alternar entre inglés y español
        localStorage.setItem('language', currentLanguage); // Guardar el idioma seleccionado
        updateLanguage();
    });

    // Inicializar el idioma por defecto
    updateLanguage();
});