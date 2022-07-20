(function () {
	"use strict";
	window.addEventListener("load", (event) => {
		const qs = new URLSearchParams(window.location.search);
		const blockTrackingForMe = qs.get("blockTrackingForMe");
		const enableTrackingForMe = qs.get("enableTrackingForMe");
		if (!!blockTrackingForMe) {
			fathom.blockTrackingForMe();
		}
		if (!!enableTrackingForMe) {
			fathom.enableTrackingForMe();
		}
	});
})();
