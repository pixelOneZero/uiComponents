var Deconstructor = (function() {

 	this.init = function() {
 		/* to do: choose elements unique to switch instance */
 		var eleDeconstructor = document.querySelectorAll('[data-component-type=deconstructor]');
 		eleText = eleDeconstructor[0].innerText;
 		var words = eleText.split(" ");
 		console.log(words);

 		for (var a=0; a < words.length;a++) {
 			eleDeconstructor[a] = "<span>" + eleDeconstructor[a] + "</span>";
 		}
 	}

 	return this;
 })();

 window.addEventListener("load", function() {
	Deconstructor.init();
});