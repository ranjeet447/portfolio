/*
These are HTML strings.Use JavaScript functions
replace the %data% placeholder text.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<br><span>%data%</span><hr>';
var HTMLmobile = '<b><i class="material-icons teal">phone</i><span class="contact-text">%data%</span></b><br>';
var HTMLemail = '<b><i class="material-icons teal">mail_outline</i><span class="contact-text">%data%</span></b><br>';
var HTMLtwitter = '<b><i class="material-icons teal">twittr</i><span class="contact-text">%data%</span></b><br>';
var HTMLgithub = '<b><a href="https://www.github.com/ranjeet447" class="fa fa-github"></a><span class="contact-text">%data%</span></b><br>';
var HTMLlocation = '<b><i class="material-icons teal">home</i><span class="contact-text">%data%</span></b><br>';

var HTMLbioPic = '<img src="%data%" class="biopic" alt="profile picture"><br>';

var HTMLskillsStart = '<div class="skill-entry"><ul id="skills" class="flex-column"></ul></div>';
var HTMLskills = '<li><span>%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div></h3>';
var HTMLschoolName = '<li><span href="#">%data%';
var HTMLschoolDegree = ' - %data%</span></li>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '</br></br><h3>Online Classes</h3>';
var HTMLonlineTitle = '<li class="flex-item"><span href="#">%data%';
var HTMLonlineSchool = ' - %data%</span></li>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a><br>';




//generate the custom Google Map for the website.
var map;  // declares a global map variable
//Start here!initializeMap() is called when page is loaded.
function initializeMap() {
  var locations;
  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {
    var locations = [];
    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);
    // iterates through school locations and appends each location to the locations array.
    education.schools.forEach(function(school){
      locations.push(school.location);
    });
    // iterates through work locations and appends each location to the locations array.
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  //  map.setCenter(pt);
    map.setZoom(4);
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {
    // creates a Google place search service object. PlacesService does the work of
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      //searches the Google Maps API for location data and runs the callback
      // function with the search results after each search
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();
  locations = locationFinder();

  pinPoster(locations);
}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
 window.addEventListener('resize', function(e) {
//  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
 });
 // <!-- <script async defer
 //   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZtdCl5hyMJBCE9HgwNejrGcEBd5Br2DE&callback=callback">
 // </script> -->
