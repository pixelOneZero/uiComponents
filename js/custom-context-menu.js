var CustomContextMenu = (function() {

 	this.init = function() {
 		/* to do: choose elements unique to switch instance */
 		var eleCustomContextMenu = document.querySelectorAll('[data-component-type=custom-context-menu]');
 		eleBody = document.querySelector('body');
 		eleBody.addEventListener("contextmenu", function() {
 			console.log('contextmenu event occurred');
 		});
 	}

 	return this;
 })();

 window.addEventListener("load", function() {
	CustomContextMenu.init();
});