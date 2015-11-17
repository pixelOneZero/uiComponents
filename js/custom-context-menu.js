var CustomContextMenu = (function() {

 	this.init = function() {
 		var eleCustomContextMenu = document.querySelector('.custom-context-menu');
 		var eleBody = document.querySelector('body');
 		eleBody.addEventListener("contextmenu", function(e) {
 			console.log('contextmenu event occurred');
 			e.preventDefault();
 		});
 		eleBody.addEventListener("click", function(e){
 			var eleTarget = e.target;
 			if (eleTarget.getAttribute("data-component-type") !== "custom-context-menu") {
 				eleCustomContextMenu.style.display = "none";
 			}
 		});
 		eleCustomContextMenu.addEventListener("mouseout", function() {
 			this.style.display = "none";
 		})
 	}

 	return this;
 })();

window.addEventListener("load", function() {
	var initCustomContextMenu = document.querySelectorAll('[data-component-type=custom-context-menu]');
	if (initCustomContextMenu.length > 0) {
		CustomContextMenu.init();
	}
});