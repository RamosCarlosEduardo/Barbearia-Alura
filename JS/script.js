// script menu
const botaoAbrirMenu = document.getElementById('hamburguer-icon-abrir')
const menu = document.querySelector('.hamburguer-menu');

botaoAbrirMenu.addEventListener("click",  () => {
	window.scrollTo(0, 0)
	menu.style.left = "0"
		document.body.style.overflow = "hidden";
});

const botaoFecharMenu = document.getElementById('hamburguer-icon-fechar')
botaoFecharMenu.addEventListener("click", () => {
	window.scrollTo(0, 0)
	menu.style.left = "-100vw"
		document.body.style.overflow = "scroll";

});


// script botões sem funcionalidade
document.querySelectorAll('.nao-disponivel').forEach((el) =>
  el.addEventListener("click", function(){alert('Essa página/funcionalidade ainda não está disponível.')}));