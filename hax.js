

function withinBounds(sw, ne, location){
    function f(elem){
        return ((location.lat() > sw.lat() && location.lat() < ne.lat()) &&
                (location.lng() > sw.lng() && location.lng() < ne.lng()))
    }
    return locArray.filter(f)
}
