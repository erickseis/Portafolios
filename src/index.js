let button = document.querySelector("body section button a");

button.addEventListener("click", ()=>{
   const span = document.querySelector("a span");
   button.style.paddingRight = '10px';
   span.style.visibility="visible";
   setTimeout(()=>{
    span.style.visibility="hidden";
    button.style.paddingRight ="0px"
   })
})