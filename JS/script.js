// script menu
const botaoAbrirMenu = document.getElementById('hamburguer-icon-abrir') 
botaoAbrirMenu.addEventListener("click", abrirMenu);

const botaoFecharMenu = document.getElementById('hamburguer-icon-fechar')
botaoFecharMenu.addEventListener("click", fecharMenu);

function abrirMenu() {
	window.scrollTo(0, 0)
	const menu = document.querySelector('.hamburguer-menu');
	menu.style.zIndex = "1";
	menu.style.transform = "translate(100%, 0)"
	
	document.body.style.overflow = "hidden";
}

function fecharMenu() {
	const menu = document.querySelector('.hamburguer-menu');
	menu.style.transform = "translate(-100%, 0)";
	document.body.style.overflow = "scroll";
}


// script botões sem funcionalidade
document.querySelectorAll('.nao-disponivel').forEach((el) =>
  el.addEventListener("click", function(){alert('Essa página/funcionalidade ainda não está disponível.')}));