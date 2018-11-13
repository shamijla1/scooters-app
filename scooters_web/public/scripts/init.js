var seekerMarker;
var gMap;
var resultsPolyLine;
var markers = [];

function initMap() {
  // Singapore :)
  var singapore = {lat: 1.352083, lng: 103.819839};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: singapore
  });

  gMap = map;

  // Red marker on the map
  seekerMarker = new google.maps.Marker({
    map: map,
    draggable: true,
    position: singapore
  });

  // Add event handler to the marker so updateSeekerMarker() is called when the mouse is up
  // More efficient to use mouseup rather than position_changed
  google.maps.event.addListener(seekerMarker, 'mouseup', updateSeekerMarker);

  // Show initial state of map
  updateSeekerMarker();
}

function updateSeekerMarker() {

  // Set the value of marker text box with lat lng values
  document.getElementById('marker').value = seekerMarker.position.toString();

  // Read distance and closest text box values
  var distance = document.getElementById('distance').value;
  var closest = document.getElementById('closest').value;

  // Perform the ajax call to the backend
  $.ajax({
    // Hardcoded URL, in real life you would retrieve
    // this from a config file or another endpoint
    url: 'http://localhost:5000/api/closestScooters',
    data: JSON.stringify({
      "scooterClosestDesiredCount": closest,
      "lat": seekerMarker.position.lat(),
      "lng": seekerMarker.position.lng(),
      "distance": distance
    }),
    type: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    success: function(results) {

      // Debugging info for the browser console
      var resultsLen = results.length;
      console.log(resultsLen);

      // Clear old scooter markers
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];

      // Parse the results
      // Points are used for drawing the polyline
      var points = [];
      points.push(seekerMarker.getPosition());
      for (var i = 0; i < resultsLen; i++) {
        points.push(results[i].scooter);
        points.push(seekerMarker.getPosition());

        // Draw some new markers that look like scooters
        var scooterMarker = new google.maps.Marker({
          map: gMap,
          draggable: false,
          icon: 'https://skyjuicesoftware.com/temp/rsz_e-vector-scooter.png',
          animation: google.maps.Animation.BOUNCE, //google.maps.Animation.DROP,
          position: results[i].scooter
        });
        markers.push(scooterMarker);
      }

      // Clear old polylines
      if (resultsPolyLine != null) {
        resultsPolyLine.setMap(null);
      }

      // Draw the new polyline
      resultsPolyLine = new google.maps.Polyline({
        path:points,
        strokeColor:"#FF0000",
        strokeOpacity:1.0,
        strokeWeight:2
      });

      resultsPolyLine.setMap(gMap);
  }});
}