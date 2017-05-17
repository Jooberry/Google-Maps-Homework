var initialize = function() {
  var center = {lat: 51.5, lng:-0.12};
  var zoom = 15;
  var container = document.getElementById("main-map");
  var mainMap = new MapWrapper(center, zoom, container);

  mainMap.addMarker(center);
  mainMap.addMarker({lat: 34.81, lng: 126.39});
  mainMap.addMarker({lat: -36.85, lng: 174.78});

  mainMap.addClickEvent();

  mainMap.addInfoWindow(0, "Woop!");
  mainMap.addInfoWindow(1, "Boop!");

  mainMap.setCenter();
  mainMap.findLocation();
}


window.addEventListener('load', initialize);