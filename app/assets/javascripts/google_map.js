var map;
var pos;
var eatPlace;

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
function initialize() {

  findCoords();
  // var mapOptions = {
  //   zoom: 8,
  //   center: new google.maps.LatLng(-34.397, 150.644)
  // };

  // var map = new google.maps.Map(document.getElementById('map-canvas'),
  //     mapOptions);

}


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

function findCoords () {
    $(document).ready(function() {
      $('#findAddress').click(function() {

          $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + $('#address').text(),
            dataType: 'json',

          success: function(data, textStatus, jqXHR) {
            var longitude = data['results'][0]['geometry']['location']['lng'];
            var latitude = data['results'][0]['geometry']['location']['lat'];
            var myLatLng = new google.maps.LatLng(latitude, longitude);
              var mapOptions = {
              zoom: 15,
              center: myLatLng
              };

              var map = new google.maps.Map(document.getElementById('map-canvas'),
                  mapOptions);
              
              var infowindow = new google.maps.InfoWindow({
                position: myLatLng,
                map: map,
                content: 'Found it!'
              });
          },


          error: function(jqXHR, textStatus, errorThrown)  {
            alert('No maps for you');
          }
          });
      });
  });
}

