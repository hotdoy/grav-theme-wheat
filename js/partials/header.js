const Header = {
    els: document.querySelectorAll("#header .burger"),
    b: document.body.classList,

    Init: function() {
        Header.els.forEach((el) => {
            el.addEventListener("click", function() {
                if (Header.b.contains('header-panel--open')) {
                    Header.b.remove("header-panel--open");
                } else {
                    Header.b.add("header-panel--open");
                } 
            });
        });
    },

    Watch: function() {
        window.addEventListener("resize", function() {
            if (window.innerWidth > 735 && Header.b.contains("header-panel--open")) {
                Header.b.remove("header-panel--open");
            }
        });
    },
};

Header.Init();
Header.Watch();
