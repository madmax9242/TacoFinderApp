// All this is for the HTML5 Geolocation feature. Ran out of time before could 
// combine it with the address locator to show directions from the user's position

// var map;

// Finds the person's location on the map using HTML5 geolocation
// function initialize() {
//   var mapOptions = {
//     zoom: 15
//   };
//   map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);

//   // Try HTML5 geolocation
//   if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

//       var infowindow = new google.maps.InfoWindow({
//         map: map,
//         position: pos,
//         content: 'You are here.'
//       });

//       map.setCenter(pos);
//     }, function() {
//       handleNoGeolocation(true);
//     });

//   } else {
//     // Browser doesn't support Geolocation
//     handleNoGeolocation(false);
//   }
// }

// function handleNoGeolocation(errorFlag) {
//   if (errorFlag) {
//     var content = 'Error: The Geolocation service failed.';
//   } else {
//     var content = 'Error: Your browser doesn\'t support geolocation.';
//   }

//   var options = {
//     map: map,
//     position: new google.maps.LatLng(60, 105),
//     content: content
//   };

//   var infowindow = new google.maps.InfoWindow(options);
//   map.setCenter(options.position);
// }

// function loadScript() {
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
//       '&signed_in=true&callback=initialize';
//   document.body.appendChild(script);
// }

//Trying to load the map at the restaurant's geolocation

var map;

function initialize() {

  findCoords();

}

function findCoords () {
  //Queries the Google Maps API with the address of the restaurant and saves them to an object myLatLng
          $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + $('#address').text(),
            dataType: 'json',

          success: function(data, textStatus, jqXHR) {
            var longitude = data['results'][0]['geometry']['location']['lng'];
            var latitude = data['results'][0]['geometry']['location']['lat'];
            var myLatLng = new google.maps.LatLng(latitude, longitude);
              var mapOptions = {
              zoom: 17,
              center: myLatLng
              };
              //Creates a map on a canvas that is centered on the restaurant using myLatLng
              var map = new google.maps.Map(document.getElementById('map-canvas'),
                  mapOptions);
              //Places a marker at the coordinates to show where the restaurant is precisely
              var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Found it!'
              });
          },

          //Returns an alert if the AJAX request is unsuccessful
          error: function(jqXHR, textStatus, errorThrown)  {
            alert('No maps for you');
          }
          });
}
//Loads the Google Maps API script first so the other functions can be performed asynchronously
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

