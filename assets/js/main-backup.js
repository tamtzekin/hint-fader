// Initialise hint buttons
var btn = document.querySelector('.js-btn');
var el = document.querySelector('.js-fade');

btn.addEventListener('click', function(e){
  if(el.classList.contains('is-hidden')){
    fadeIn(el);
  }
  else {
    fadeOut(el);
  }
});

// Hint button fade animations 
function fadeOut(el) {
	el.style.opacity = 1;
	(function fade() {
		if ((el.style.opacity -= .1) < 0) {
			el.style.display = 'none';
			el.classList.add('is-hidden');
		} else {
			requestAnimationFrame(fade);
		}
	})();
}

function fadeIn(el, display) {
	if (el.classList.contains('is-hidden')) {
		el.classList.remove('is-hidden');
	}
	el.style.opacity = 0;
	el.style.display = display || "block";
	
	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
};
  