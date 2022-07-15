(function () {
	"use strict";
    const a = window.matchMedia('(prefers-color-scheme: dark)');
    if (a.matches) {
        document.body.classList.add('colorscheme-dark');
    }
    a.addEventListener('change', event => {
        if (event.matches) {
            document.body.classList.add('colorscheme-dark');
        } else {
            document.body.classList.remove('colorscheme-dark');
        }
    })
    document.querySelectorAll('.colorscheme-toggle').forEach(toggle => {
        toggle.addEventListener('click', event => {
            document.body.classList.toggle('colorscheme-dark');
        })
    })
})();
