(function () {
	"use strict";
    const a = window.matchMedia('(prefers-color-scheme: dark)');
    if (a.matches) {
        document.body.classList.add('dark');
    }
    a.addEventListener('change', event => {
        if (event.matches) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    })
})();
