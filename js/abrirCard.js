let nome = document.querySelector('.info-nome');
let nome1 = document.querySelector('.info-nome1');
let nome2 = document.querySelector('.info-nome2');
let cardLuke = document.querySelector('.card__luke');
let cardc3po = document.querySelector('.card__c3po');
let cardr2d2 = document.querySelector('.card__r2d2');

nome.addEventListener('dblclick', (event) => {
cardLuke.style.display = 'block' ;
});

nome.addEventListener('click', (event) => {
    cardLuke.style.display = 'none' ;
    });

    nome1.addEventListener('dblclick', (event) => {
        cardc3po.style.display = 'block' ;
        });
        
        nome1.addEventListener('click', (event) => {
            cardc3po.style.display = 'none' ;
            });

            nome2.addEventListener('dblclick', (event) => {
                cardr2d2.style.display = 'block' ;
                });
                
                nome2.addEventListener('click', (event) => {
                    cardr2d2.style.display = 'none' ;
                    });
        

