(function () {
	"use strict";
	const SetImgBehavior = function () {
		document.querySelectorAll("img").forEach((el) => {
			el.onload = function () {
				el.setAttribute("loaded", "");
			};
			if (el.complete) {
				el.setAttribute("loaded", "");
			}
		});
	};
	const ObserveMutation = function () {
		let o = new MutationObserver(SetImgBehavior);
		o.observe(document.body, { childList: true, subtree: true });
	};
	SetImgBehavior();
	ObserveMutation();
})();
