htmx.on("htmx:responseError", function (e) {
	console.log("crap! - " + e.detail.xhr.status);
	window.location.href = e.detail.xhr.responseURL;
});
