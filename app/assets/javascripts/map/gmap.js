function loadMap () {
  var mapOptions = {
    center: { lat: 30.2500, lng: -97.7500 },
    zoom: 14
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  google.maps.event.addDomListener(window, 'load', initialize);
};

var ready;

ready = function() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'libraries=places&' + 'callback=initialize';
	document.body.appendChild(script);	
};