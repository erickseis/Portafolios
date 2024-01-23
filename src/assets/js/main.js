let body = document.querySelector("body")
let themeIcon = document.getElementById("dark")
let espanol = document.getElementById("spanol");
let portugues = document.getElementById("portugues")
let english = document.getElementById("english")
let modal = document.getElementById("lenguage-modal");

espanol.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    localStorage.setItem("idiomaElegido", "espanol");
});


let idiomaElegido = localStorage.getItem("idiomaElegido");
if (idiomaElegido) {
    // Si el usuario ya eligió un idioma, oculta el modal y carga la página en ese idioma
    modal.style.display = "none";
    cargarIdioma(idiomaElegido);
} else {
    // Si el usuario no ha elegido un idioma, muestra el modal de elección de idioma
    modal.style.display = "block";
}


portugues.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = ("../../../index.pt.html")
    modal.style.display = "none";


});
english.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = ("../../../index.en.html")
    modal.style.display = "none";

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