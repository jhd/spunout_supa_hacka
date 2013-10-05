
      var events = {
        'bounds_changed': 'fired when the viewport bounds have changed.',
      };

      var markers;

      function withinBounds(map, locations){
            function f(elem){
                return map.getBounds().contains(elem)
            }
            return locations.filter(f)
        }

      function setupListener(map, name) {
        google.maps.event.addListener(map, name, function() {

           var foo = [new google.maps.LatLng(53, -8), new google.maps.LatLng(50, 20)];
           markers = withinBounds(map, foo);
           var marker;
           for(var i=0; i<markers.length; i++){
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

      // Dynamically create the table of events from the defined hashmap
      function populateTable(markers) {
        var eventsTable = document.getElementById('service_descr');
        content = '';
        if (typeof markers !== 'undefined'){

        // for (var event in events) {
        //   content += '<tr id="' + event + '"> <th>' + event +
        //     '</th> <td> ' + events[event] + '</td></tr>';
        // }
        for (var i=0; i<markers.length; i++){
            content += '<tr><td>' + markers[i].toString() + '</td></tr>';
        }
        eventsTable.innerHTML = content;
    }
      }
      // Load the map
      google.maps.event.addDomListener(window, 'load', initialize);

