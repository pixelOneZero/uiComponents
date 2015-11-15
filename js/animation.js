var Animation = (function() {

 	this.init = function() {
 		/* to do: choose elements unique to switch instance */
 		var eleAnimations = document.querySelectorAll('[data-component-type=animation]');
 		var circles = document.querySelectorAll('[data-component-type=animation] .circles .circle');

 		for (var a=0; a < eleAnimations.length;a++) {
 			eleAnimations[a].addEventListener('click', function() {
 				this.className = '';
 				this.className += "active";
 			});
 		}
 	}

 	return this;
 })();

 window.addEventListener("load", function() {
	Animation.init();
});