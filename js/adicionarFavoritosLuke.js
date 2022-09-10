let alturaLuke = document.querySelector('#altura__luke'); 
let alturaLabelLuke = document.querySelector('.altura__label--luke');
let pesoLuke = document.querySelector('#peso__luke'); 
let pesoLabelLuke = document.querySelector('.peso__label--luke');
let cabeloLuke = document.querySelector('#cabelo__luke'); 
let cabeloLabelLuke = document.querySelector('.cabelo__label--luke');
let olhosLuke = document.querySelector('#olhos__luke'); 
let olhosLabelLuke = document.querySelector('.olhos__label--luke');
let generoLuke = document.querySelector('#genero__luke'); 
let generoLabelLuke = document.querySelector('.genero__label--luke');

let local = document.querySelector('.conteudo__favoritos');
let local1 = document.querySelector('.conteudo__favoritos1');
let local2 = document.querySelector('.conteudo__favoritos2');
let local3 = document.querySelector('.conteudo__favoritos3');
let local4 = document.querySelector('.conteudo__favoritos4');

let btnFav = document.querySelector('.botao__fav');

    
    btnFav.addEventListener('click', ()=>{
        if(alturaLuke.checked === false) {
            local.textContent = ""; 

        } else {
            local.textContent = alturaLabelLuke.innerHTML;

        };

    });

    btnFav.addEventListener('click', ()=>{
        if(pesoLuke.checked === false) {
            local1.textContent = ""; 

        } else {
            local1.textContent = pesoLabelLuke.innerHTML;

        };

    });

    btnFav.addEventListener('click', ()=>{
        if(cabeloLuke.checked === false) {
            local2.textContent = ""; 

        } else {
            local2.textContent = cabeloLabelLuke.innerHTML;

        };

    });

    btnFav.addEventListener('click', ()=>{
        if(olhosLuke.checked === false) {
            local3.textContent = ""; 

        } else {
            local3.textContent = olhosLabelLuke.innerHTML;

        };

    });

    btnFav.addEventListener('click', ()=>{
        if(generoLuke.checked === false) {
            local4.textContent = ""; 

        } else {
            local4.textContent = generoLabelLuke.innerHTML;

        };

    });

    
    