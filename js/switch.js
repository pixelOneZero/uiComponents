var Switch = (function() {

 	this.init = function() {
 		/* to do: choose elements unique to switch instance */
 		var eleSwitches = document.querySelectorAll('[data-component-type=switch]');

 		for (var a=0; a < eleSwitches.length;a++) {
 			eleSwitches[a].state = 'on';
 			eleSwitches[a].addEventListener('click', function() {
 				this.className = this.className.replace('on',' ').replace(' off','');
 				this.state = this.state === 'on' ? 'off' : 'on';
 				console.log('this.className = ' + this.className + ", this.state = " + this.state);
 				this.className += ' ' + this.state;
 			});
 		}
 	}

 	return this;
 })();

 window.addEventListener("load", function() {
	Switch.init();
});