function initMap() {
       const myLoc = { lat: 52.9541053, lng: -1.240101 };
       const map = new google.maps.Map(document.getElementById("map"), {
         zoom: 6,
         center: myLoc,
       });
       const marker = new google.maps.Marker({
         position: myLoc,
         map: map,
       });
     }
//the idea of this code was partially taken from
//google itself.
