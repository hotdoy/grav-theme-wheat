(function () {
	"use strict";
    const els = document.querySelectorAll('.module, .modular');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
            } else {
                entry.target.classList.remove('in');
            }
        })
    });
    els.forEach(el => {
        observer.observe(el);
    });
})();
