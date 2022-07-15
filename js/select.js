(function () {
	"use strict";

    const Sync = function () {
        const params = new URLSearchParams(window.location.search);
        for (const [key, value] of params) {
            document.querySelectorAll(`select[name="${key}"]`).forEach(s => {
                if (s.querySelector(`option[value="${value}"]`)) {
                    s.value = value;
                }
            });
        }
    };

    const SyncOnLoad = function () {
        document.addEventListener('htmx:load', function() {
            setTimeout(() => {
                Sync();    
            }, 200);
        }, false);
    };

    Sync();
    SyncOnLoad();
})();
