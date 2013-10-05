var request = jQuery.parseJSON(
    jQuery.getJSON("http://www.whoismytd.com/v1"));

function getLatitude(id, data){

    return data.services[id].address.latitude;

}

function getLongitude(id, data){

    return data.services[id].address.longitude;

}

function getInfo(id, data){

    return data.services[id].info;

}

function getTitle(id, data){

    return data.services[id].title;

}

function getPage(id, data){

    return data.services[id].page;

}

function getWebsite(id, data){

    return data.services[id].website;

}

function getEmail(id, data){

    return data.services[id].email;

}

function getPhone(id, data){

    return data.services[id].phone;

}

function getHotline(id, data){

    return data.services[id].hotline;

}

function getHours(id, data){

    return data.services[id].hours;

}

function getKeywords(id, data){

    return data.services[id].keywords;

}

function getImage(id, data){

    return data.services[id].image;

}

function getAddress(id, data){
    
    var result = data.services[id].address.lines[0] + '\n';
    result = result + data.services[id].address.lines[1] + '\n';
    result = result + data.services[id].address.city + '\n';
    result = result + data.services[id].address.postcode + '\n';
    result = result + data.services[id].address.county + '\n';
    result = result + data.services[id].address.country;

    return result
}

function makeDiv(id, data){

    result = "<div class=\"container\"> <div class=\"item\">";
    result = result + getTitle(id, data);
    result = result + "</div><div class=\"extra\" style=\"display:none\">";
    result = result + "<img src=\"img/phone.png\" width=\"20px\" /> <a href=\"\">" + getPhone(id, data);
    result = result + "</a></p>";
    result = result + "<img src=\"img/link.png\" width=\"20px\" /> <a href=\"\">" + getWebsite(id, data);
    result = result + "</a></p>";
    result = result + "<img src=\"img/email.png\" width=\"20px\" /> <a href=\"\">" + getEmail(id, data);
    result = result + "</a></p>";
    result = result + "</div></hr></div>"

    return result;
}
