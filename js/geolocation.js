geolocator.prototype.constructor = geolocator;

/**
* @constructor
* @this {geolocator}
* @param {string} domId The HTML id value that contains a geolocator instance.
**/

function geolocator(domId) {

    var container = document.getElementById(domId);
    var self, opts, latitude, longitude, geocoder, latlng;
    this.inlineMessage = container.getAttribute("data-inline-message");
    var geoType = container.getAttribute("data-component-type");
    
    typeof geoType == "undefined" ? "" : geoType;

    if (document.getElementById(domId) === null) {
        document.body.innerHTML += "<p>domId provided does not exist.  could not create a locator.</p>";
        return;
    }

    if (navigator.geolocation) {
        geocoder = new google.maps.Geocoder();
        navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            container.innerHTML += "Your latitude is <span>" + latitude + "</span> and your longitude is <span>" + longitude + "</span>.<hr/>";
            geocoder.geocode({'latLng': latlng}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1] && geoType == "geocode") {
                        container.innerHTML += "Your address is " + results[1].formatted_address + "<hr/>";
                        container.innerHTML += "<a href='https://www.google.com/maps/search/" + latitude + "," + longitude + "' target='_blank'>See this location on a map.</a>";

                    }
                } 
                else {
                    container.innerHTML += "Geocoder failed due to: " + status + ""
                }
            }); 
        }); 
    } 
    else {
        document.body.innerHTML += "Sorry, geolocation services are not supported by your browser.";
    }
}