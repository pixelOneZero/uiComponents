geolocator.prototype.constructor = geolocator;

/**
 * @constructor
 * @this {geolocator}
 * @param {string} domId The HTML id value that contains a geolocator instance.
 */
function geolocator(domId) {
    if (document.getElementById(domId).length < 1) {
        alert("Error: domId does not exist. Cannot create player.");
        return;
    }

    var container = document.getElementById(domId);
    var self;
    var opts;
    
    this.inlineMessage = container.getAttribute("data-inline-message");
    console.log("this.isEmbedded: " + this.inlineMessage);
    // Define 'self' variable for use in private functions.
    self = this;

    //this.bind(domId);

    function saveCoordinates() {
       self.coordinates;
    }
}