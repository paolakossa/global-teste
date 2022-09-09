if (localStorage.getItem('token') == null) {
	alert("Você precisa estar logado para acessar esta página!");
	window.location.href = 'file:///C:/Users/paola.kossa/OneDrive/Documentos/global-teste/login.html'; 

}

function sair () {
	localStorage.removeItem('token'); 
	window.location.href = 'file:///C:/Users/paola.kossa/OneDrive/Documentos/global-teste/login.html'; 
}