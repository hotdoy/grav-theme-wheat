(function () {
	"use strict";

    const SyncSelect = function () {
        const params = new URLSearchParams(window.location.search);
        for (const [key, value] of params) {
            document.querySelectorAll(`select[name="${key}"]`).forEach(s => {
                if (s.querySelector(`option[value="${value}"]`)) {
                    s.value = value;
                }
            });
        }
    };

    const SyncInput = function () {
        const params = new URLSearchParams(window.location.search);
        for (const [key, value] of params) {
            document.querySelectorAll(`input[name="${key}"]`).forEach(i => {
                i.value = value;
            });
        }
    };

    const SyncOnLoad = function () {
        document.addEventListener('htmx:load', function() {
            setTimeout(() => {
                SyncSelect();
                SyncInput();
            }, 200);
        }, false);
    };

    SyncSelect();
    SyncInput();
    SyncOnLoad();
})();
