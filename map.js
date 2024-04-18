function initMap() {
    var address = document.getElementById('charity-address').textContent;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status == 'OK') {
            var location = results[0].geometry.location;
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: location
            });
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                title: address
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

window.onload = initMap;
