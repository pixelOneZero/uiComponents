geolocator.prototype.constructor = geolocator;

/**
 * @constructor
 * @this {twcPlayer}
 * @param {string} domId The HTML id value that contains the twcPlayer.
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

    if (container.getAttribute("data-embedded")==="true") {
        this.isEmbedded = true;
    }

    // Define 'self' variable for use in private functions.
    self = this;

    //this.bind(domId);

    function saveCoordinates() {
       self.coordinates;
    }

}


// for use by developer to determine appearance of endcard;

geolocator.prototype.setEmbedded = function(mode){
    // its embedded
    if (mode) {
        this.isEmbedded = true;
    }
    else { //its not embedded
        this.isEmbedded = false;
    }
};



/**
 * Assign a feedURL to a player object. The supplied pid is the first video to play.
 * @param {string} feedURL The URL of the feed associated to a player object.
 * @param {string} pid Represent the first video to play in the player object.
 */
geolocator.prototype.setFeed = function(feedURL) {

    var opts = {url: feedURL, success: processFeedResponse};
    $.ajax(opts);

    function processFeedResponse(data, textStatus, jqXHR) {

        _data = JSON.parse(data);

        if (_data.entryCount > 0) {
            $pdk.controller.setReleaseURL(_data.entries[0].media$content[0].plfile$url,true);
        }

    }

};

/**
 * Assign a feedURL to a player object. The supplied pid is the first video to play.
 * @param {string} feedURL The URL of the feed associated to a player object.
 * @param {string} pid Represent the first video to play in the player object.
 */
geolocator.prototype.setFeed = function(feedURL, pid) {

    var opts = {url: feedURL, success: processFeedResponse};
    $.ajax(opts);

    function processFeedResponse(data, textStatus, jqXHR){

        _data = JSON.parse(data);

        if (_data.entryCount > 0) {
            url = _data.entries[0].media$content[0].plfile$url;
        }
        if (pid !== undefined) {
            url = contentURI + pid + contentFormat;
        }

        $pdk.controller.setReleaseURL(url,true);

    }

};

/**
 * Assign a pid to a player object. The supplied pid is the video to play.
 * @param {string} pid The video to play in the player object.
 */
geolocator.prototype.setVideo = function(pid) {

   var url = contentURI + pid + contentFormat;

   if (pid !== undefined) {
       $pdk.controller.setReleaseURL(url,true);
   }

};

/**
 * Pauses the playback of a twcPlayer object. This function has no return value.
 * @this {undefined}
 */
geolocator.prototype.pausePlayback = function(willPlay) {

    $pdk.controller.pause(willPlay);

};

/**
 * Plays the current video, contained in the twcPlayer object, from its beginning. This function has no return value (it actually returns undefined).
 * @this {undefined}
 */
geolocator.prototype.replay = function() {

    $pdk.controller.seekToPosition(0);

};

/**
 * Destroys a twcPlayer object. This function has no return value (it actually returns undefined).
 * @this {undefined}
 */
geolocator.prototype.kill = function() {

   $("#" + this.domId).hide();

   delete this.domId;
   delete this.autoPlay;
   delete this.feed;
   delete this.releaseURL;

};
