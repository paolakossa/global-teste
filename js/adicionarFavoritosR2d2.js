let alturaR2d2 = document.querySelector('#altura__r2d2'); 
let alturaLabelR2d2 = document.querySelector('.altura__label--r2d2');
let pesoR2d2 = document.querySelector('#peso__r2d2'); 
let pesoLabelR2d2 = document.querySelector('.peso__label--r2d2');
let cabeloR2d2 = document.querySelector('#cabelo__r2d2'); 
let cabeloLabelR2d2 = document.querySelector('.cabelo__label--r2d2');
let olhosR2d2 = document.querySelector('#olhos__r2d2'); 
let olhosLabelR2d2 = document.querySelector('.olhos__label--r2d2');
let generoR2d2 = document.querySelector('#genero__r2d2'); 
let generoLabelR2d2 = document.querySelector('.genero__label--r2d2');

let local10 = document.querySelector('.conteudo__favoritos10');
let local11 = document.querySelector('.conteudo__favoritos11');
let local12 = document.querySelector('.conteudo__favoritos12');
let local13 = document.querySelector('.conteudo__favoritos13');
let local14 = document.querySelector('.conteudo__favoritos14');

let btnFav2 = document.querySelector('.botao__fav2');

btnFav2.addEventListener('click', ()=>{
    if(alturaR2d2.checked === false) {
        local10.textContent = ""; 

    } else {
        local10.textContent = alturaLabelR2d2.innerHTML;

    };

});

btnFav2.addEventListener('click', ()=>{
    if(pesoR2d2.checked === false) {
        local11.textContent = ""; 

    } else {
        local11.textContent = pesoLabelR2d2.innerHTML;

    };

});

btnFav2.addEventListener('click', ()=>{
    if(cabeloR2d2.checked === false) {
        local12.textContent = ""; 

    } else {
        local12.textContent = cabeloLabelR2d2.innerHTML;

    };

});

btnFav2.addEventListener('click', ()=>{
    if(olhosR2d2.checked === false) {
        local13.textContent = ""; 

    } else {
        local13.textContent = olhosLabelR2d2.innerHTML;

    };

});

btnFav2.addEventListener('click', ()=>{
    if(generoR2d2.checked === false) {
        local14.textContent = ""; 

    } else {
        local14.textContent = generoLabelR2d2.innerHTML;

    };

});