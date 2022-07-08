(function () {
	"use strict";
    document.addEventListener('htmx:beforeRequest', () =>{
        navigator.vibrate(1);
    });
})();
