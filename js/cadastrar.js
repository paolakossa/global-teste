let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senha'); 
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmaSenha = document.querySelector('#confirmaSenha'); 
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha'); 
let validConfirmaSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', () => {

	if(nome.value.length <= 2 ) {
		labelNome.setAttribute('style', 'color: #FF4A4A');
		labelNome.innerHTML = 'Nome *Insira, no mínimo, 3 caracteres';
		nome.setAttribute('style', 'border-color:#FF4A4A');
		validNome = false;
	} else {
		labelNome.setAttribute('style', 'color: #59CE8F');
		labelNome.innerHTML = 'Nome';
		nome.setAttribute('style', 'border-color:#59CE8F');
		validNome = true;
	}
});

usuario.addEventListener('keyup', () => {

	if(usuario.value.length <= 4 ) {
		labelUsuario.setAttribute('style', 'color: #FF4A4A');
		labelUsuario.innerHTML = 'Usuário *Insira, no mínimo, 5 caracteres';
		usuario.setAttribute('style', 'border-color:#FF4A4A');
		validUsuario = false;
	} else {
		labelUsuario.setAttribute('style', 'color: #59CE8F');
		labelUsuario.innerHTML = 'Usuário';
		usuario.setAttribute('style', 'border-color:#59CE8F');
		validUsuario = true;
	}
});

senha.addEventListener('keyup', () => {

	if(senha.value.length <= 5 ) {
		labelSenha.setAttribute('style', 'color: #FF4A4A');
		labelSenha.innerHTML = 'Senha *Insira, no mínimo, 6 caracteres';
		senha.setAttribute('style', 'border-color:#FF4A4A');
		validSenha = false;
	} else {
		labelSenha.setAttribute('style', 'color: #59CE8F');
		labelSenha.innerHTML = 'Senha';
		senha.setAttribute('style', 'border-color:#59CE8F');
		validSenha = true;
	}
});

confirmaSenha.addEventListener('keyup', () => {

	if(senha.value != confirmaSenha.value) {
		labelConfirmaSenha.setAttribute('style', 'color: #FF4A4A');
		labelConfirmaSenha.innerHTML = 'Confirma Senha *As senhas não conferem';
		confirmaSenha.setAttribute('style', 'border-color:#FF4A4A');
		validConfirmaSenha = false;
	} else {
		labelConfirmaSenha.setAttribute('style', 'color: #59CE8F');
		labelConfirmaSenha.innerHTML = 'Confirmar senha';
		confirmaSenha.setAttribute('style', 'border-color:#59CE8F');
		validConfirmaSenha = true;
	}
});



function cadastrar() {

	if(validNome && validUsuario && validSenha && validConfirmaSenha) {
		let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]'); 

		listaUser.push({

			nomeCad: nome.value,
			usuarioCad: usuario.value,
			senhaCad: senha.value
		});

		localStorage.setItem('listaUser', JSON.stringify(listaUser));


		msgSuccess.setAttribute('style', 'display:block');
		msgSuccess.innerHTML = 'Cadastrando usuário...';
		msgError.setAttribute('style', 'display:none');
		msgError.innerHTML = '';

		setTimeout(() => {
			window.location.href = 'https://paolakossa.github.io/global-teste/login'
		}, 2000);

		

	} else {
		msgError.setAttribute('style', 'display:block');
		msgError.innerHTML = 'Preencha todos os campos corretamente antes de se cadastrar!';
		msgSuccess.setAttribute('style', 'display:none');
		msgSuccess.innerHTML = '';
	}
	
}