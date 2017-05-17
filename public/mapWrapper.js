var MapWrapper = function(coords, zoom, container) {
  this.googleMap = new google.maps.Map(container, {
    zoom: zoom,
    center: coords
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    this.markers.push(marker);
    this.addInfoWindow(this.markers.length - 1, this.markers.length.toString());
  },
  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event) {
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };

      this.addMarker(position);

    }.bind(this));
  },
  addInfoWindow: function(index, contentString) {
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    this.markers[index].addListener('click', function() {
      infowindow.open(this.googleMap, this.markers[index]);
    }.bind(this));
  },
  setCenter: function() {
    var button = document.querySelector('#first');
    button.addEventListener('click', function() {
      this.googleMap.setCenter({lat: 55.965068, lng: -3.1720769});
    }.bind(this));
  },
  findLocation: function() {
    var button = document.querySelector('#second');
    button.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(position);
      this.googleMap.setCenter(pos);
    });
    });
  }
}