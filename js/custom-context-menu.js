var CustomContextMenu = (function() {

 	this.init = function() {
 		var eleCustomContextMenu = document.querySelector('.custom-context-menu');
 		var eleBody = document.querySelector('body');
 		eleBody.addEventListener("contextmenu", function(e) {
 			e.preventDefault();
 			eleCustomContextMenu.style.left = e.clientX - 10 + "px";
 			eleCustomContextMenu.style.top = e.clientY - 15 + "px";
 			eleCustomContextMenu.style.display = "block";
 		});
 		eleBody.addEventListener("mouseout", function(e) {
 			if (e.target.tagName === "NAV") {
 				e.target.style.display = "none";
 			}
 		});
 		eleBody.addEventListener("click", function(e) {
 			if (e.target.tagName !== "NAV" || e.target.parentElement.tagName !== "NAV") {
 				eleCustomContextMenu.style.display = "none";
 			}
 		})
 		eleCustomContextMenu.addEventListener("mouseover", function(e){
 			eleCustomContextMenu.style.display = "block";
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