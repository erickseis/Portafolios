let body = document.querySelector("body")
let themeIcon = document.getElementById("dark")
let espanol = document.getElementById("spanol");
let modal = document.getElementById("lenguage-modal");

// Comprueba si el modal ya estaba oculto antes de refrescar la página
if (localStorage.getItem("modalEscondido") === "true") {
    modal.style.display = "none";
}

espanol.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    window.location.href = "../../../index.html";

    // Guarda el estado del modal en el almacenamiento local
    localStorage.setItem("modalEscondido", "true");
});

themeIcon.addEventListener("click", (e) => {

    body.classList.toggle("dark-theme")

})

window.sr = ScrollReveal();

sr.reveal('.description', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.btn-cv', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
});
sr.reveal('.scroll-img', {
    duration: 3000,
    origin: 'rigth',
    distance: '-100px'
});

AOS.init();