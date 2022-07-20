(function () {
	"use strict";
	const InitProduct = function () {
		const selects = document.querySelectorAll(".product .variant select");
		for (let select of selects) {
			select.addEventListener("change", function () {
				let key = "data-item-" + select.dataset.field + "-value";
				let value = select.options[select.selectedIndex].value;
				document.querySelector(".snipcart-add-item").setAttribute(key, value);
			});
		}
	};
	InitProduct();
})();
