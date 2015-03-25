//Google Map//

function initialize() {
  var myLatlng = new google.maps.LatLng(39.73924,-104.99025);
  var mapOptions = {
     zoom: 11,
     center: myLatlng
    //center: { lat: 39.73924, lng: -104.99025},
    //zoom: 12
  }
  var myMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);//create map
//TODO figure out how to add in content from external api
//adds an info window when the marker is clicked
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: myMap,
      title: 'Denver'
  });
//for info window to work
  google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(myMap,marker);
});
    for(var i = 0; i < locations().length; i++) {
        var latlong = new google.maps.LatLng(locations()[i].lat, locations()[i].lng);

        var marker = new google.maps.Marker({
        position: latlong,
        map: myMap,
        title: locations()[i].name
        });
    }


}//close initialize function

google.maps.event.addDomListener(window, 'load', initialize);


//function markers(){
//  for location.
//}

//Model//
//define and list locations
var locations = ko.observableArray([
  {name: "2914 Coffee",
      street: "2914 W. 25th Ave",
      zip: "80211",
      city: "Denver",
      lat: 39.753484,
      lng: -105.024068,
      stars: "4.6",
  },
  {name: "Crema Coffee House",
      street: "2862 Larimer St",
      zip: "80205",
      city: "Denver",
      lat: 39.761073,
      lng: -104.981712,
      stars: "4.5",
  },
  {name: "Dazbog Coffee",
      street: "1201 E 9th Ave",
      zip: "80218",
      city: "Denver",
      lat: 39.730534,
      lng: -104.972666,
      stars: "3.8",
  },
  {name: "Highlands Cork & Coffee",
      street: "3701 W 32nd Ave",
      zip: "80211",
      city: "Denver",
      lat: 39.762296,
      lng: -105.035920,
      stars: "4.1",
  },
  {name: "Metropolis Coffee",
      street: "1 S Broadway",
      zip: "80223",
      city: "Denver",
      lat: 39.716444,
      lng: -104.987704,
      stars: "4.4",
  },
  {name: "Peet's Coffe & Tea",
      street: "2500 E 2nd Ave",
      zip: "80206",
      city: "Denver",
      lat: 39.719163,
      lng: -104.957035,
      stars: "4.0",
  },
  {name: "Roostercat Coffee House",
      street: "1045 Lincoln St",
      zip: "80203",
      city: "Denver",
      lat: 39.732957,
      lng: -104.986412,
      stars: "5.0",
    },
  {name: "Steam Espresso Bar",
      street: "1801 S Pearl Street",
      zip: "80210",
      city: "Denver",
      lat: 39.683850,
      lng: -104.980778,
      stars: "4.9",
  },
  {name: "Tenn Street Coffee",
      street: "4418 Tennyson St",
      zip: "80212",
      city: "Denver",
      lat: 39.776929,
      lng: -105.043733,
      stars: "3.9",
  },
  {name: "The Bardo Coffee House",
      street: "238 S. Broadway",
      zip: "80209",
      city: "Denver",
      lat: 39.712298,
      lng: -104.987224,
      stars: "4.7",
  },
  {name: "Wash Perk",
    street: "853 E. Ohio Ave",
    zip: "80209",
    city: "Denver",
    lat: 39.702221,
    lng: -104.977111,
    stars: "4.4",
  },

  ] //end observableArray//
);






//suggestions given in http://discussions.udacity.com/t/any-guidance-on-coding-p5/3757/10

//var INFO_WINDOW = new google.maps.InfoWindow();

//View//
//suggested in http://discussions.udacity.com/t/any-guidance-on-coding-p5/3757/10
function ViewModel() {
  var self = this;
}
// Activates knockout.js
ko.applyBindings( new ViewModel() );




//Search Box//

/*like if (text_matches && star_rate_filter_matches) { //Show the marker }
ea to hide a marker

if(locations().stars && ){marker.setMap(map)}
else{marker.setMap(Null)};



Udacity Coach: and use marker.setMap(map); to show

Udacity Coach: marker.setMap(Null); to hide

marker.setMap(null); //hides it

Udacity Coach: yea null is void

Udacity Coach: https://developers.google.com/maps/documentation/javascript/markers

Udacity Coach: search for "Remove Markers"

Udacity Coach: oh wait, "Remove a marker"

Udacity Coach: hopefully that can guide you where you need to go*/


//Additional API//
