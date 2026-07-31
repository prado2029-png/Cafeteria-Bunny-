// Desplazamiento suave al hacer clic en el menú

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animación al cargar la página

window.onload = function () {
    document.body.style.opacity = "1";
};