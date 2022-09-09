function entrar () {
    let usuario = document.querySelector('#usuario');
    let userLabel = document.querySelector('#userLabel');
    
    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');

    let msgError = document.querySelector('#msgError');
    let listaUser = []; 

    let userValid = {
        nome:'', 
        user:'',
        senha:''
    }; 

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if(usuario.value == item.usuarioCad && senha.value == item.senhaCad){
           
            userValid = {
                nome: item.nomeCad, 
                user: item.usuarioCad, 
                senha: item.senhaCad
            }
        }
    }); 

        if(usuario.value == userValid.user && senha.value == userValid.senha && usuario.value != '' && senha.value != '' ) {

            window.location.href = 'file:///C:/Users/paola.kossa/OneDrive/Documentos/global-teste/inicio.html';

            let token = Math.random().toString(16).substr(2);

            localStorage.setItem('token', token);
            
        } else {

            userLabel.setAttribute('style', 'color: #FF4A4A');
            usuario.setAttribute('style', 'border-color:#FF4A4A');
            senhaLabel.setAttribute('style', 'color: #FF4A4A');
            senha.setAttribute('style', 'border-color:#FF4A4A');
            msgError.setAttribute('style', 'display:block');
            msgError.innerHTML = 'Usuário ou senha incorretos';
            usuario.focus();
           
        }
    

};

