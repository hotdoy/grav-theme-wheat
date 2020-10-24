function initMap() {
  const ctns = document.querySelectorAll('[id^="map-"]');
  for (let ctn of ctns) {
    const zoom = ctn.dataset.zoom ? parseInt(ctn.dataset.zoom) : "";
    const markers = ctn.dataset.markers ? JSON.parse(ctn.dataset.markers) : "";
    const styles = ctn.dataset.styles ? JSON.parse(ctn.dataset.styles) : "";
    let marker, i;
    const bounds = new google.maps.LatLngBounds();

    const map = new google.maps.Map(ctn, {
      zoom: zoom,
      center: new google.maps.LatLng(markers[0][1], markers[0][2]),
      styles: styles || undefined,
      zoomControl: true,
      panControl: true,
      streetViewControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      mapTypeId: "roadmap",
      draggable: true,
    });

    for (i = 0; i < markers.length; i++) {
      const title = markers[i][0];
      const position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      const url = markers[i][3];
      const icon = markers[i][4];
      marker = new google.maps.Marker({
        title: title,
        position: position,
        icon: icon,
        url: url,
      });

      google.maps.event.addListener(marker, "click", function () {
        window.open(this.url, "_blank");
      });

      bounds.extend(position);
      marker.setMap(map);
    }

    if (markers.length > 1) {
      map.fitBounds(bounds);
    }
  }
}

(function () {
  "use strict";

  const addMapScript = function () {
    const ctns = document.querySelectorAll('[id^="map-"]');
    if (ctns[0]) {
      const key = ctns[0].dataset.key;
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=" +
        key +
        "&callback=initMap";
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);
    }
  };

  addMapScript();
})();
