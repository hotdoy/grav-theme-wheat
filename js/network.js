(function () {
	"use strict";
	const Listen = function () {
		window.addEventListener("online", UpdateStatus);
		window.addEventListener("offline", UpdateStatus);
	};

	const UpdateStatus = function (event) {
		const condition = navigator.onLine ? "online" : "offline";
		if (condition === "online") {
			document.body.setAttribute("data-network", "online");
		} else {
			document.body.setAttribute("data-network", "offline");
		}
	};

	UpdateStatus();
	Listen();
})();
