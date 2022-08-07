window.addEventListener('scroll', function(){
    let animation = document.getElementById('animado');
    let positionOne = animation.getBoundingClientRect().top;
    let widthScreen = window.innerHeight/3.5;

if(positionOne < widthScreen){
    animation.style.animation = 'mover 1.5s ease-out'
}

})
