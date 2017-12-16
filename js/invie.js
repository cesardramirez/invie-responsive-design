var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');
var $guitarras = document.getElementById('guitar');
var $body = document.body;
var consulta = window.matchMedia('(max-width:500px)');
consulta.addListener(mediaQuery);

mediaQuery();

function mediaQuery() {
	if (consulta.matches) {
		console.log("cumple resolución, es < 500px");
		$burguerButton.addEventListener('click', toogleMenu);
		$guitarras.addEventListener('click', toogleMenu);
	} else {
		console.log("no cumple resolución, es > 500px");
	}
}

function toogleMenu(event) {
	console.log(event.type);
	$menu.classList.toggle('active');
	$body.classList.toggle('opened');
	$burguerButton.classList.toggle('icon-close');
}

function showMenu(event) {
	console.log(event.type);
	$menu.classList.add('active');
	$body.classList.add('opened');
	$burguerButton.classList.add('icon-close');
}

function hideMenu(event) {
	console.log(event.type);
	$menu.classList.remove('active');
	$body.classList.remove('opened');
	$burguerButton.classList.remove('icon-close');
}

var bLazy = new Blazy({
	'selector' : 'img'
});

var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);