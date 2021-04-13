(function() {
    "use strict";

    const InitHeader = function() {
        const toggles = document.querySelectorAll("#header .grid .burger");
        let lastOffset = 0;

        for (let toggle of toggles) {
            toggle.addEventListener("click", function() {
                if (document.body.classList.contains('header-panel--open')) {
                    document.body.classList.remove("header-panel--open");
                } else {
                    document.body.classList.add("header-panel--open");
                } 
            });
        }

        window.addEventListener("resize", function() {
            if (window.innerWidth > 735 && document.body.classList.contains("header-panel--open")) {
                document.body.classList.remove("header-panel--open");
            }
        });
    };

    InitHeader();
})();