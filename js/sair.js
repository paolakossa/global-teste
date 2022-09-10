if (localStorage.getItem('token') == null) {
	alert("Você precisa estar logado para acessar esta página!");
	window.location.href = 'https://paolakossa.github.io/global-teste/login.html'; 

}

function sair () {
	localStorage.removeItem('token'); 
	window.location.href = 'https://paolakossa.github.io/global-teste/login.html'; 
}