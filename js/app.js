//Model//data for application
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
  {name: "Crema Coffee House",
      street: "2862 Larimer St",
      zip: "80205",
      city: "Denver",
      lat: 39.761073,
      lng: -104.981712,
      stars: 4.5,
      show: ko.observable(true),
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.761073,-104.981712&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows",
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
      street: "1 S Broadway",
      zip: "80223",
      city: "Denver",
      lat: 39.716444,
      lng: -104.987704,
      stars: 4.4,
      show: ko.observable(true),
      url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.716444,-104.987704&key=AIzaSyCwfGY1D0Uy63zo2_Zex1VfHWF-sVXrows",
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
  ] //end observableArray//
)
};

//Google Map//
var bouncingMarker = null; //global variable setting initial bounce of marker to null--for togglebounce functionality
//ViewModel// what the user sees //view is
//function initialize() {

    var myLatlng = new google.maps.LatLng(39.73924,-104.99025);
    var mapOptions = {
       zoom: 11,
       center: myLatlng
      //center: { lat: 39.73924, lng: -104.99025},
      //zoom: 12
    }

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);//create map
    function initialize() {
      var myLatlng = new google.maps.LatLng(39.73924,-104.99025);
      var mapOptions = {
         zoom: 11,
         center: myLatlng
        //center: { lat: 39.73924, lng: -104.99025},
        //zoom: 12
      }

      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);//create map
      setMarkers(map, viewModel.locations());
  };//close initialize function
//TODO figure out how to add in content from external api
//adds an info window when the marker is clicked
//info window structure taken from https://developers.google.com/maps/documentation/javascript/infowindows

/*var fsLink = "https://api.foursquare.com/v2/venues/search?ll="+location.lat+","+location.lng;
var venue = ""

console.log(fsLink);


$.ajax({
    url: fsLink,
    dataType: "jsonp",
    success: function(response){
        venue = response[1];
        console.log(fsLink);
    }
});*/
/*Pseudocode

create link that gets the location telephone number and location hours and have that information displayed in the info window and/or as results when clicking on the locaation link.
*/
//create a new marker array
//var location.marker = "";


//To display individual location markers and infowindow content
var infoWindow = new google.maps.InfoWindow();
function setMarkers(map, locations){
  locations.forEach(function(location, index){
    if (location.show()){
      var latlong = new google.maps.LatLng(location.lat, location.lng);

      //foursquare api
      var fsLink = "https://api.foursquare.com/v2/venues/search?client_id=J5JPE0AIVETMYFHEXXYIK4X03DKZLTGP2CTO54QOZ3WWONEU&client_secret=C0BN2MI32GSZLOWER3QK3WQWMQ3JHOYNPHGARSNKEESGL1VN0&v=20130815&ll=40.7,-74&query=sushi";
    //  //"https://api.foursquare.com/v2/venues/search?ll="+location.lat+","+location.lng;
var venue = "";
$.ajax({
url: fsLink,
dataType: "jsonp",
success: function(response){
  console.log(response);
venue = response[1];
}
});



  //infowindow content

      var contents = '<h3 id="firstHeading" class="firstHeading">' + location.name + '</h1>' +    location.stars + ' ' + 'Stars' + '<a href="' + location.url + '">' + 'Street View </a>' + venue.contact.phone;
      //TODO add error handling for streetview
      //console.log(location)
      var marker = new google.maps.Marker({
        position: latlong,
        animation: google.maps.Animation.DROP,
        map: map,
        title: location.name,
        url: location.url,
        });
    //    location.marker = marker;
      google.maps.event.addListener(marker, 'click', toggleBounce);

      function toggleBounce() {
        if (marker.getAnimation() != null) {
          marker.setAnimation(null);
        }
        else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function() {
            marker.setAnimation(null)
            }, 3000);
        }
      };
    var clickListener = function() { //add clicklistner function to address if marker is bouncing or not
        if(bouncingMarker)
            bouncingMarker.setAnimation(null);
        if(bouncingMarker != this) {
            this.setAnimation(google.maps.Animation.BOUNCE);
            bouncingMarker = this;
        } else
            bouncingMarker = null;
    }

            marker.content = contents ;//tells the marker which content to display for infowindow
            google.maps.event.addListener(marker, 'click', clickListener); //for togglebounce
            google.maps.event.addListener(marker, 'click', (function(marker) {
              return function(){
              //  toggleBounce();
              infoWindow.setContent(marker.content);
              infoWindow.open(map, this);
            }
          })(marker));

    };
  });
};

    //close for loop
  //close set marker function
//}//close initialize function

//TODO create function setMarkers with for loop ousitde initialize function
http://stackoverflow.com/questions/11106671/google-maps-api-multiple-markers-with-infowindows

//TODO create map load error handling, streetview error handling

//from https://developers.google.com/maps/documentation/javascript/tutorial
google.maps.event.addDomListener(window, 'load', initialize);

/*$('test').toggle(function(){
  ko.utils.arrayForEach(locations(), function(location) {
  for  (location in locations)
    if (location.stars === $('select option:selected').val()){
        location.show = true}
      //if (location.stars === document.getElementsByTagName('option')[i].value){
    else {location.show = false};
    })

});



$("#ratings").change(function(){
  var val = $("#ratings").val()
  viewModel.locations().forEach(function(location, index){
    if (location.stars==val){
      location.show(true)
    }
    else{
      location.show(false)
    }
  });
  initialize()
});


//ko.applyBindings(viewModel);




//}

//View//
function ViewModel() {
  var self = this;
}
// Activates knockout.js
ko.applyBindings(viewModel);



/*var fsURL = "https://api.foursquare.com/v2/venues/search?near=zurich&section=drinks&oauth_token=NOFWGL5PTP4HRY3W1IODQGUKIAG1GA5BV2AOBVGGLJGV0HF4&v=20150318"

$.ajax({
    url: fsURL,
    dataType: "json",
    success: function(response){
        var venue = response[1];
        console.log(venue);
    }
});*/











//Search Box//

//like if (text_matches && star_rate_filter_matches) { //Show the marker }
//ea to hide a marker

//if(locations().stars && ){marker.setMap(map)}
//else{marker.setMap(Null)};


//Additional API//



//additional functions:

/*    google.maps.event.addListener(marker, 'click', toggleBounce);
    function toggleBounce() {

      if (marker().getAnimation() != null) {
        marker().setAnimation(null);
      }
      else {
        marker().setAnimation(google.maps.Animation.BOUNCE);
      }
    };*/

    //    google.maps.event.addListener(marker, "click", function() {
    //     location.assign(marker.url)});//upon second click on marker, the streetview location opens in a new window
    //      });
  //  });
  /*https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=J5JPE0AIVETMYFHEXXYIK4X03DKZLTGP2CTO54QOZ3WWONEU&client_secret=C0BN2MI32GSZLOWER3QK3WQWMQ3JHOYNPHGARSNKEESGL1VN0&v=YYYYMMDD

  https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=J5JPE0AIVETMYFHEXXYIK4X03DKZLTGP2CTO54QOZ3WWONEU&client_secret=C0BN2MI32GSZLOWER3QK3WQWMQ3JHOYNPHGARSNKEESGL1VN0&v=YYYYMMDD


  Client ID
  J5JPE0AIVETMYFHEXXYIK4X03DKZLTGP2CTO54QOZ3WWONEU

  Client Secret
  0BN2MI32GSZLOWER3QK3WQWMQ3JHOYNPHGARSNKEESGL1VN0*/
