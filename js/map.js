let ctns = document.querySelectorAll('[id^="map-"]');

function initMap() {
	for (let ctn of ctns){
		let zoom = ctn.dataset.zoom ? parseInt(ctn.dataset.zoom) : '';
		let	markers = ctn.dataset.markers ? JSON.parse(ctn.dataset.markers) : '';
		let	styles = ctn.dataset.styles ? JSON.parse(ctn.dataset.styles) : '';
		let marker, i;
		let bounds = new google.maps.LatLngBounds();

		let map = new google.maps.Map(ctn, {
			zoom: zoom,
			center: new google.maps.LatLng(markers[0][1], markers[0][2]),
			styles: styles || undefined,
			zoomControl: true,
			panControl: true,
			streetViewControl: false,
			mapTypeControl: false,
			scrollwheel: false,
			mapTypeId: 'roadmap',
			draggable: true,
		});

		for (i = 0; i < markers.length; i++) {
			let title = markers[i][0];
			let position = new google.maps.LatLng(markers[i][1], markers[i][2]);
			let url = markers[i][3];
			let icon = markers[i][4];
				marker = new google.maps.Marker({
					title: title,
					position: position,
					icon: icon,
					url: url,
				});
			
			google.maps.event.addListener(marker, 'click', function() {
				window.open(this.url, '_blank')
				
			});
			
			bounds.extend(position);
			marker.setMap(map);
		}

		if (markers.length > 1) {
			map.fitBounds(bounds);
		}
	}
}

if (!!ctns[0]) {
	let key = ctns[0].dataset.key;
	let script = document.createElement('script');
	script.src = "https://maps.googleapis.com/maps/api/js?key=" + key + "&callback=initMap";
	script.defer = true;
	script.async = true;
	document.body.appendChild(script);
}
