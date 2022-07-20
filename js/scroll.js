(function () {
	"use strict";
	const b = document.body;
	let lastScroll = 0;
	if (window.scrollY < 20) {
		b.classList.add("top");
	}
	window.addEventListener("scroll", () => {
		const currentScroll = window.pageYOffset;
		// top
		if (window.scrollY < 20) {
			b.classList.add("top");
		} else {
			b.classList.remove("top");
		}
		// down
		if (currentScroll > lastScroll + 10) {
			b.classList.remove("up");
			b.classList.add("down");
			// up
		} else if (currentScroll < lastScroll - 10) {
			b.classList.remove("down");
			b.classList.add("up");
		}
		lastScroll = currentScroll;
	});
})();
