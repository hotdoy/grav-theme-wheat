(function () {
	"use strict";
	document.addEventListener("load", (event) => {
        document.body.classList.add("loaded");
        setTimeout(() => {
            document.body.classList.add("visible");
        }, 0);
    });
})();
