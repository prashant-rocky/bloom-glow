var Center=new google.maps.LatLng(55.8674395,-4.2499492);

function initialize() {
    var venturamap = {
        center:Center,
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map=new google.maps.Map(document.getElementById("wrd-google-map"),venturamap);

    var marker=new google.maps.Marker({
        position:Center,
        icon:'assets/images/others/map-marker.png',
        animation:google.maps.Animation.BOUNCE
    });
 
	var styles = [
        {"elementType":"geometry","stylers":[{"color":"#e3e5e3"}]},
        {"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
        {"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},
        {"elementType":"labels.text.stroke","stylers":[{"color":"#e3e5e3"}]},
        {"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},
        {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},
        {"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color": "#757575"}]},
        {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},
        {"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},
        {"featureType": "road","elementType": "geometry","stylers":[{"color": "#dadada"}]},
        {"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},
        {"featureType":"road.highway","elementType":"geometry","stylers":[{"color": "#dadada"}]},
        {"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},
        {"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},
        {"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},
        {"featureType": "transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},
        {"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},
        {"featureType": "water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}
    ];

    marker.setMap(map);

    map.setOptions({styles: styles});				
}

google.maps.event.addDomListener(window, 'load', initialize); 