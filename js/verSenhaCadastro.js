let btn = document.querySelector('#verSenha'); 

btn.addEventListener('click', () => {
	let inputSenha = document.querySelector('#senha');

	if(inputSenha.getAttribute('type') == 'password'){
		inputSenha.setAttribute('type', 'text');
	} else {
		inputSenha.setAttribute('type', 'password');
	}
});

let btnConfirm = document.querySelector('#verConfirmeSenha'); 

btnConfirm.addEventListener('click', () => {
	let inputSenhaConfirm = document.querySelector('#confirmaSenha');

	if(inputSenhaConfirm.getAttribute('type') == 'password'){
		inputSenhaConfirm.setAttribute('type', 'text');
	} else {
		inputSenhaConfirm.setAttribute('type', 'password');
	}
});