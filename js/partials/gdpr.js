(function() {
    "use strict";

    const initGdpr = function() {
        const e = document.getElementById('gdpr');
        if (!!e) {
            const b = e.querySelector('button');
            if (!localStorage.getItem('accept_cookies')) {
                e.style.display = 'block';
                b.addEventListener('click', function() {
                    localStorage.setItem('accept_cookies', 'true');
                    e.remove();
                });
            }         
        }

    };
    initGdpr();
})();