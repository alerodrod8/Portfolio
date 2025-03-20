document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("change-palette");

    button.addEventListener("click", () => {
        document.querySelectorAll(".li img").forEach(img => {
            if (img.src.includes("starfc.svg")) {
                img.src = "/src/assets/img/starfd.svg"; // Cambia a la versión oscura
            } else if (img.src.includes("starnfc.svg")) {
                img.src = "/src/assets/img/starnfd.svg"; // Cambia a la versión oscura
            } else if (img.src.includes("starfd.svg")) {
                img.src = "/src/assets/img/starfc.svg"; // Vuelve a la versión clara
            } else if (img.src.includes("starnfd.svg")) {
                img.src = "/src/assets/img/starnfc.svg"; // Vuelve a la versión clara
            }
        });
    });
});