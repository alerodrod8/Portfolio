// Función para configurar el indicador de desplazamiento
const gallery = document.querySelector(".gallery")
const topGradient = document.querySelector(".top-gradient")
const scrollTopContainer = document.querySelector(".scroll-top-container")
const scrollTopButton = document.querySelector(".scroll-top-button")
const bottomGradient = document.querySelector(".bottom-gradient")

document.addEventListener("DOMContentLoaded", () => {
  setupScrollIndicator()
})

function setupScrollIndicator() {
  // Verificar si hay suficientes tarjetas para justificar los indicadores
  const cards = document.querySelectorAll(".cards-container")
  const hasMultipleRows = cards.length > 3

  if (!hasMultipleRows) {
    // Si no hay suficientes tarjetas, ocultamos los indicadores
    if (topGradient) {
      topGradient.style.opacity = "0"
    }
    if (scrollTopContainer) {
      scrollTopContainer.style.display = "none"
    }
    if (bottomGradient) {
      bottomGradient.style.opacity = "0"
    }
    return
  }

  // Función para actualizar la visibilidad de los indicadores
  function updateIndicatorVisibility() {
    if (!gallery || !topGradient || !bottomGradient || !scrollTopContainer) return

    const scrollTop = gallery.scrollTop
    const scrollHeight = gallery.scrollHeight
    const clientHeight = gallery.clientHeight
    const scrollBottom = scrollHeight - scrollTop - clientHeight

    // Mostrar/ocultar gradiente superior (solo visible cuando estamos cerca del final)
    if (scrollBottom < 200) {
      topGradient.style.opacity = "1"
      // El botón aparece instantáneamente
      scrollTopContainer.style.display = "flex"
    } else {
      topGradient.style.opacity = "0"
      // El botón desaparece instantáneamente
      scrollTopContainer.style.display = "none"
    }

    // Mostrar/ocultar gradiente inferior (visible cuando hay más contenido abajo)
    bottomGradient.style.opacity = scrollBottom > 10 ? "1" : "0"
  }

  // Configurar evento de clic para el botón de flecha
  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      gallery.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Escuchar eventos de desplazamiento
  if (gallery) {
    gallery.addEventListener("scroll", updateIndicatorVisibility)

    // Inicializar la visibilidad
    updateIndicatorVisibility()
  }

  // Actualizar cuando cambie el tema
  const themeToggleButton = document.getElementById("change-palette")
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      // Ya no alternamos la clase dark aquí, lo hace themeToggle.js
      // Solo actualizamos los gradientes
      setTimeout(() => {
        updateGradientColors()
        handleGradientTransition()
      }, 50) // Pequeño retraso para asegurar que themeToggle.js haya actualizado la clase
    })
  }

  // Inicializar colores del gradiente
  updateGradientColors()
}

// Función para actualizar los colores del gradiente según el tema
function updateGradientColors() {
  const isDarkTheme = document.body.classList.contains("dark")

  if (bottomGradient) {
    if (isDarkTheme) {
      // Tema oscuro - usar --color-dpb
      bottomGradient.style.background = "linear-gradient(to bottom, transparent, var(--color-dpb) 90%)"
    } else {
      // Tema claro - usar --color-cpb
      bottomGradient.style.background = "linear-gradient(to bottom, transparent, var(--color-cpb) 90%)"
    }
  }

  if (topGradient) {
    if (isDarkTheme) {
      // Tema oscuro - usar --color-dpb
      topGradient.style.background = "linear-gradient(to top, transparent, var(--color-dpb) 90%)"
    } else {
      // Tema claro - usar --color-cpb
      topGradient.style.background = "linear-gradient(to top, transparent, var(--color-cpb) 90%)"
    }
  }
}

// Función para manejar la transición de los gradientes
function handleGradientTransition() {
  const isDarkTheme = document.body.classList.contains("dark")
  const arrowImage = document.querySelector(".rotate-180")

  // Primero hacemos los gradientes transparentes
  if (topGradient) {
    topGradient.style.opacity = "0"
  }
  if (bottomGradient) {
    bottomGradient.style.opacity = "0"
  }

  // Esperamos a que termine la transición de opacidad
  setTimeout(() => {
    // Actualizar colores del gradiente
    updateGradientColors()

    // Después de actualizar los colores, volvemos a hacer visibles los gradientes
    setTimeout(() => {
      if (topGradient && topGradient.style.display !== "none") {
        topGradient.style.opacity = "1"
      }
      if (bottomGradient && gallery) {
        const scrollHeight = gallery.scrollHeight
        const clientHeight = gallery.clientHeight
        const scrollTop = gallery.scrollTop
        const scrollBottom = scrollHeight - scrollTop - clientHeight

        if (scrollBottom > 10) {
          bottomGradient.style.opacity = "1"
        }
      }
    }, 20) // Tiempo para volver a mostrar los gradientes

    // Cambiar la imagen de la flecha según el tema
    if (arrowImage) {
      if (isDarkTheme) {
        arrowImage.src = "/src/assets/img/arrowy.svg" // Cambiar a la flecha amarilla
      } else {
        arrowImage.src = "/src/assets/img/arrowp.svg" // Cambiar a la flecha original
      }
    }
  }, 1) // Tiempo para actualizar los colores después de ocultar
}

// Inicializar el tema al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  setupScrollIndicator()
  updateGradientColors()

  // Actualizar la flecha según el tema actual
  const isDarkTheme = document.body.classList.contains("dark")
  const arrowImage = document.querySelector(".rotate-180")
  if (arrowImage) {
    if (isDarkTheme) {
      arrowImage.src = "/src/assets/img/arrowy.svg"
    } else {
      arrowImage.src = "/src/assets/img/arrowp.svg"
    }
  }
})