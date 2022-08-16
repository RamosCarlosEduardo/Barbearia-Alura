function abrirMenu() {
	window.scrollTo(0, 0)
	let menu = document.querySelector('.hamburguer-menu');
	menu.style.zIndex = "1";
	menu.style.transform = "translate(100%, 0)"
	
	document.body.style.overflow = "hidden";
}

function fecharMenu() {
	let menu = document.querySelector('.hamburguer-menu');
	// menu.style.z-index = "0"
	menu.style.transform = "translate(-100%, 0)";
	document.body.style.overflow = "scroll";
}

function addEvento() {
var botaoAbrirMenu = document.getElementById('hamburguer-icon-abrir')	
botaoAbrirMenu.addEventListener("click", abrirMenu);

var botaoFecharMenu = document.getElementById('hamburguer-icon-fechar')
botaoFecharMenu.addEventListener("click", fecharMenu);
}

setInterval(addEvento, 1000)



// documentation jQueryMask: https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html#public-methods
$(document).ready(function(){
  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $('.phone_with_ddd').mask('(00) 0000-0000');
  $('.celphone_with_ddd').mask('(00) 0 0000-0000', {placeholder: '(00) 0 0000-0000'});
  $('.phone_us').mask('(000) 000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});



});


$('#nome').keyup(function(){
  this.value = this.value.toUpperCase();
});

$('#mensagem').keyup(function(){
  let caracteresUsados = this.value.length
  let caracteresRestantes = this.maxLength - caracteresUsados
  $('#contador-de-caracteres').html('Caracteres restantes: ' + caracteresRestantes)
});