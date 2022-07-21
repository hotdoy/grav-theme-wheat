(function () {
	"use strict";
	const a = window.matchMedia("(prefers-color-scheme: dark)");
	const b = localStorage.getItem("colorscheme");
	if (a.matches || b) {
		document.body.classList.add("colorscheme-dark");
	}
	a.addEventListener("change", (event) => {
		if (event.matches) {
			document.body.classList.add("colorscheme-dark");
			localStorage.setItem("colorscheme", "dark");
		} else {
			document.body.classList.remove("colorscheme-dark");
			localStorage.removeItem("colorscheme");
		}
	});
})();

const ToggleColorScheme = function () {
	if (document.body.classList.contains("colorscheme-dark")) {
		document.body.classList.remove("colorscheme-dark");
		localStorage.removeItem("colorscheme");
	} else {
		document.body.classList.add("colorscheme-dark");
		localStorage.setItem("colorscheme", "dark");
	}
};
