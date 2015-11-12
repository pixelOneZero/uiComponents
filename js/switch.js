 var Switch = (function() {

 	this.init = function() {
 		/* to do: choose elements unique to switch instance */
 		var eleSwitches = document.querySelectorAll('[data-component-type=switch]');
 		var eleLabelOn = document.querySelectorAll('[data-state=on]');
 		var eleLabelOff = document.querySelectorAll('[data-state=off]');

 		for (var a=0; a < eleSwitches.length;a++) {
 			eleSwitches[a].state = 'on';
 			eleSwitches[a].addEventListener('click', function() {
 				this.state = this.state === 'on' ? 'off' : 'on';
 				console.log('this.className = ' + this.className + ", this.state = " + this.state);
 				this.className = this.state;
 			});
 		}
 	}

 	return this;
 })();

 window.addEventListener("load", function() {
	Switch.init();
});