var events = {
    'bounds_changed': 'fired when the viewport bounds have changed.'
};

var markers;

function withinBounds(map, locations) {
    var ne = map.getBounds().getNorthEast()
    var sw = map.getBounds().getSouthWest()

    function f(elem) {
        return (elem.lat() < ne.lat() && elem.lat() > sw.lat()) &&
          (elem.lng() < ne.lng() && elem.lng() > sw.lng());
    }
    return locations.filter(f);
}

function setupListener(map, name) {
    google.maps.event.addListener(map, name, function () {
        var foo = [new google.maps.LatLng(53, -8), new google.maps.LatLng(50, 8)];
        markers = withinBounds(map, foo);
        var marker;
        for (var i = 0; i < markers.length; i++) {
            marker = new google.maps.Marker({
                position: markers[i],
                map: map,
                title: 'Hello World!'
            });
        }
    });
}

function initialize() {
    var mapDiv = document.getElementById('map-canvas');
    var map = new google.maps.Map(mapDiv, {
        center: new google.maps.LatLng(53, -8),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    for (eventName in events) {
        setupListener(map, eventName);
    }

}

// Load the map
google.maps.event.addDomListener(window, 'load', initialize);
