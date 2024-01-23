let body = document.querySelector("body")
let themeIcon = document.getElementById("dark")
// Comprueba si el modal debe estar oculto al cargar la página
if (localStorage.getItem('hideModal') === 'true') {
    document.getElementById('lenguage-modal').classList.add('hidden');
}

document.getElementById('spanol').addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.setItem('hideModal', 'true');  // Guarda el estado del modal
    window.location.href = "/index.html";
});
document.getElementById('portugues-link').addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.setItem('hideModal', 'true');  // Guarda el estado del modal
    window.location.href = "/index.pt.html";
});

document.getElementById('english-link').addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.setItem('hideModal', 'true');  // Guarda el estado del modal
    window.location.href = "/index.en.html";
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