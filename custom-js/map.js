function initMap() {
    const myLatLng = { lat: 54.27027130126953, lng: -8.481186866760254 };
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "CK's Computers",
  });
  }

  window.initMap = initMap;