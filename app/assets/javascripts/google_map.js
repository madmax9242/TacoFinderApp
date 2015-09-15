
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
            //var myLocation = "600 Congress Avenue, Austin, Texas";
            //findMe(myLocation);
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

