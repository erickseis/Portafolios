let body = document.querySelector("body")
let themeIcon = document.getElementById("dark")
let espanol = document.getElementById("spanol");
let portugues = document.getElementById("portugues")
let english = document.getElementById("english")
let modal = document.getElementById("lenguage-modal");

espanol.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";

});
portugues.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    window.location.href = ("../../../index.pt.html")

});
english.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    window.location.href = ("../../../index.en.html")

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