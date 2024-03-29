let body = document.querySelector("body")
let themeIcon = document.getElementById("dark")
const loader = document.getElementById("loader")

window.addEventListener("DOMContentLoaded", () => {
    showLoader();
})

window.addEventListener("load", () => {
    setTimeout(() => {

        hideLoader();
        ScrollReveal().reveal('.scroll-img');
        ScrollReveal().reveal('#animado');
    }, 1000)

})

const showLoader = () => {
    loader.classList.add("show_loader")

}
const hideLoader = () => {
    loader.classList.remove("show_loader")
    const app = document.getElementById("app")
    app.classList.add("view-app")

}

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