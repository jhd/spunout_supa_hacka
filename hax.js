function withinBounds(sw, ne, location){
    function f(elem){
        return ((elem.lat() > sw.lat() && elem.lat() < ne.lat()) &&
                (elem.lng() > sw.lng() && elem.lng() < ne.lng()))
    }
    return locArray.filter(f)
}
