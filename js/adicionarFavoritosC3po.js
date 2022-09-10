let alturaC3po = document.querySelector('#altura__c3po'); 
let alturaLabelC3po = document.querySelector('.altura__label--c3po');
let pesoC3po = document.querySelector('#peso__c3po'); 
let pesoLabelC3po = document.querySelector('.peso__label--c3po');
let cabeloC3po = document.querySelector('#cabelo__c3po'); 
let cabeloLabelC3po = document.querySelector('.cabelo__label--c3po');
let olhosC3po = document.querySelector('#olhos__c3po'); 
let olhosLabelC3po = document.querySelector('.olhos__label--c3po');
let generoC3po = document.querySelector('#genero__c3po'); 
let generoLabelC3po = document.querySelector('.genero__label--c3po');

let local5 = document.querySelector('.conteudo__favoritos5');
let local6 = document.querySelector('.conteudo__favoritos6');
let local7 = document.querySelector('.conteudo__favoritos7');
let local8 = document.querySelector('.conteudo__favoritos8');
let local9 = document.querySelector('.conteudo__favoritos9');

let btnFav1 = document.querySelector('.botao__fav1');

btnFav1.addEventListener('click', ()=>{
    if(alturaC3po.checked === false) {
        local5.textContent = ""; 

    } else {
        local5.textContent = alturaLabelC3po.innerHTML;

    };

});

btnFav1.addEventListener('click', ()=>{
    if(pesoC3po.checked === false) {
        local6.textContent = ""; 

    } else {
        local6.textContent = pesoLabelC3po.innerHTML;

    };

});

btnFav1.addEventListener('click', ()=>{
    if(cabeloC3po.checked === false) {
        local7.textContent = ""; 

    } else {
        local7.textContent = cabeloLabelC3po.innerHTML;

    };

});

btnFav1.addEventListener('click', ()=>{
    if(olhosC3po.checked === false) {
        local8.textContent = ""; 

    } else {
        local8.textContent = olhosLabelC3po.innerHTML;

    };

});

btnFav1.addEventListener('click', ()=>{
    if(generoC3po.checked === false) {
        local9.textContent = ""; 

    } else {
        local9.textContent = generoLabelC3po.innerHTML;

    };

});