geolocator.prototype.constructor = geolocator;

/**
 * @constructor
 * @this {geolocator}
 * @param {string} domId The HTML id value that contains a geolocator instance.
 */
function geolocator(domId) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
        });
    } 
    else {
        alert("Sorry, geolocation services are not supported by your browser.");
    }

    if (document.getElementById(domId) === null) {
        document.body.innerHTML="domId provided does not exist.  could not create a locator.";
        return;
    }

    var container = document.getElementById(domId);
    var self;
    var opts;
    
    this.inlineMessage = container.getAttribute("data-inline-message");

    console.log("this.isEmbedded: " + this.inlineMessage);
    // Define 'self' variable for use in private functions.
    self = this;

    function saveCoordinates() {
       self.coordinates;
    }
}