window.addEventListener('scroll', function(){
    let animation = document.getElementById('animado', 'box-review1');
    let positionOne = animation.getBoundingClientRect().top;
    let widthScreen = window.innerHeight/5;

if(positionOne < widthScreen){
    animation.style.animation = 'mover 1s ease-out'
}

})
