'use strict'

export function locationMap() {
    $('.location__bitmap').on('click', function (){
        let $height = $(this).height();
        $(this).fadeOut();
        $('#map').css({height: $height});

        initMap();

    })

    let iconBase = 'assets/images/icons/map_marker.svg'
    let myLatLng = {lat: 50.4501, lng: 30.5234};
    let marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: iconBase,
        title: 'Hello World!'
    });

    function initMap() {
      let map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: 50.4501, lng: 30.5234},
            zoom: 10
        });
    }
}

export function contactsMap() {
    let iconBase = 'assets/images/icons/map_marker.svg'
    let myLatLng = {lat: 50.4501, lng: 30.5234};
    let marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: iconBase,
        title: 'Hello World!'
    });

    function initMap() {
      let map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: 50.4501, lng: 30.5234},
            zoom: 10
        });
    }

    initMap();
}