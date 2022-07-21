(function () {
	"use strict";
	const a = window.matchMedia("(prefers-color-scheme: dark)");
	if (a.matches || localStorage.getItem("prefers-color-scheme") == "dark") {
		document.body.setAttribute("data-theme", "dark");
	} else {
		document.body.setAttribute("data-theme", "light");
	}
	
	a.addEventListener("change", (event) => {
		if (event.matches) {
			document.body.setAttribute("data-theme", "dark");
			localStorage.setItem("prefers-color-scheme", "dark");
		} else {
			document.body.setAttribute("data-theme", "light");
			localStorage.setItem("prefers-color-scheme", "light");
		}
	});
})();

const ToggleColorScheme = function () {
	if (document.body.getAttribute("data-theme") == "dark") {
		document.body.setAttribute("data-theme", "light");
		localStorage.setItem("prefers-color-scheme", "light");
	} else {
		document.body.setAttribute("data-theme", "dark");
		localStorage.setItem("prefers-color-scheme", "dark");
	}
};
