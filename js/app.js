//Model
//data for application
//define and list locations
var viewModel = {
 locations : ko.observableArray([
  {name: "2914 Coffee",
      street: "2914 W. 25th Ave",
      zip: "80211",
      city: "Denver",
      lat: 39.753484,
      lng: -105.024068,
      stars: 4.6,
      show: ko.observable(true),
      //marker: "",
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.753484,-105.024068&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows",
  },
  {name: "Dazbog Coffee",
      street: "1201 E 9th Ave",
      zip: "80218",
      city: "Denver",
      lat: 39.730534,
      lng: -104.972666,
      stars: 3.8,
      show: ko.observable(true),
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.730534,-104.972666&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows",
  },
  {name: "Highlands Cork & Coffee",
      street: "3701 W 32nd Ave",
      zip: "80211",
      city: "Denver",
      lat: 39.762296,
      lng: -105.035920,
      stars: 4.1,
      show: ko.observable(true),
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.762296,-105.035920&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows",
  },
  {name: "Metropolis Coffee",
      street: "300 West 11th Avenue",
      zip: "80204",
      city: "Denver",
      lat: 39.733677,
      lng: -104.991923,
      stars: 4.4,
      show: ko.observable(true),
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.733677,-104.991923&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows",
  },
  {name: "Pablo's Cafe",
    street: "630 E. 6th Ave",
    zip: "80203",
    city: "Denver",
    lat: 39.725458,
    lng: -104.979014,
    stars: 4.2,
    show: ko.observable(true),
    url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.725458,-104.979014&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows"
  },
  {name: "Peet's Coffe & Tea",
      street: "2500 E 2nd Ave",
      zip: "80206",
      city: "Denver",
      lat: 39.719163,
      lng: -104.957035,
      stars: 4.0,
      show: ko.observable(true),
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.719163,-104.957035&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows",
  },
  {name: "Roostercat Coffee House",
      street: "1045 Lincoln St",
      zip: "80203",
      city: "Denver",
      lat: 39.732957,
      lng: -104.986412,
      stars: 5.0,
      show: ko.observable(true),
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.732957,-104.986412&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows",
    },
  {name: "Steam Espresso Bar",
      street: "1801 S Pearl Street",
      zip: "80210",
      city: "Denver",
      lat: 39.683850,
      lng: -104.980778,
      stars: 4.9,
      show: ko.observable(true),
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.683850,-104.980778&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows",
  },
  {name: "Tenn Street Coffee",
      street: "4418 Tennyson St",
      zip: "80212",
      city: "Denver",
      lat: 39.776929,
      lng: -105.043733,
      stars: 3.9,
      show: ko.observable(true),
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.776929,-105.043733&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows"
  },
  {name: "The Bardo Coffee House",
      street: "238 S. Broadway",
      zip: "80209",
      city: "Denver",
      lat: 39.712298,
      lng: -104.987224,
      stars: 4.7,
      show: ko.observable(true),
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.712298,-104.987224&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows",
  },
  {name: "Wash Perk",
    street: "853 E. Ohio Ave",
    zip: "80209",
    city: "Denver",
    lat: 39.702221,
    lng: -104.977111,
    stars: 4.4,
    show: ko.observable(true),
    url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.702221,-104.977111&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows"
  },
  ] //end observableArray
)
};

//ViewModel
// what the user sees
//define global variables
//Google Map
var bouncingMarker = null; //global variable setting initial bounce of marker to null--for togglebounce functionality

function initialize() {
    var myLatlng = new google.maps.LatLng(39.73924,-104.99025);
    var mapOptions = {
       zoom: 11,
       center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);//creates map
      setMarkers(map, viewModel.locations());
}//close initialize function




//Functions and variables used to display individual location markers and infowindow content
var infoWindow = new google.maps.InfoWindow();
function setMarkers(map, locations){
  locations.forEach(function(location, index){
    if (location.show()){
      //infowindow content
      var contents = '<h3 id="firstHeading" class="firstHeading">' + location.name + '</h1>' +  '<em>' + location.stars  + ' '+ ' ' + 'Stars' + '</em>' + '<h4>' + location.street + ',' +' '+ location.city + ',' +' '+ 'CO' + ' ' + location.zip + '</h4>' + '<a href="' + location.url + '">' + 'Street View </a>';
      //foursquare api url
      var fsLink =
      "https://api.foursquare.com/v2/venues/search?client_id=J5JPE0AIVETMYFHEXXYIK4X03DKZLTGP2CTO54QOZ3WWONEU&client_secret=0BN2MI32GSZLOWER3QK3WQWMQ3JHOYNPHGARSNKEESGL1VN0&v=20130815&ll="+ location.lat + "," + location.lng + "&query=" + location.name;
      var latlong = new google.maps.LatLng(location.lat, location.lng);

      var venues = "";
      //ajax call to display foursquare api & includes error handling
      $.ajax({
        url: fsLink,
        dataType: "jsonp",
      success: function(response){
        venues = response.response.venues[0];
        contents = contents + "Foursquare Phone:" + " " + venues.contact.formattedPhone;
        },
      error: function(jqXHR, status, error){
       contents = contents + "Sorry, we cannot find a phone number for" + " " + location.name +" " + "at this time.";
       }
     });//close .ajax

      //create our map markers
      var marker = new google.maps.Marker({
        position: latlong,
        animation: google.maps.Animation.DROP,
        map: map,
        title: location.name,
        url: location.url,
        });


      //set toggleBounce function
      google.maps.event.addListener(marker, 'click', toggleBounce);
      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        }
        else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function() {
            marker.setAnimation(null);
            }, 3000);
        }
      }//close toggleBounce function

    var clickListener = function() { //add clicklistner function to address if marker is bouncing or not
        if(bouncingMarker)
            bouncingMarker.setAnimation(null);
        if(bouncingMarker != this) {
            this.setAnimation(google.maps.Animation.BOUNCE);
            bouncingMarker = this;
        } else
            bouncingMarker = null;
    };//close clickListener function


    google.maps.event.addListener(marker, 'click', clickListener); //for togglebounce
    google.maps.event.addListener(marker, 'click', (function(marker) {
        return function(){
          infoWindow.setContent(contents);
          infoWindow.open(map, this);
          };
        })(marker));

    }//close if statement in setMarkers function
  });//close locations.forEach function
}//close setMarker function

google.maps.event.addDomListener(window, 'load', initialize);
//function to update locations list and map markers based on selected star value from select box--search functionality
$("#ratings").change(function(){
  var val = $("#ratings").val();
  viewModel.locations().forEach(function(location, index){
    if (location.stars==val){
      location.show(true);
    }
    else{
      location.show(false);
    }
  });
  initialize();
});


//View//
function ViewModel() {
  var self = this;
}
// Activates knockout.js
ko.applyBindings(viewModel);
