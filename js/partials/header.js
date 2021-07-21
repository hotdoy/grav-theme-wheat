const Header = {
    toggles: document.querySelectorAll("#header .burger"),
    maxWidth: 735,

    Init: function() {
        this.toggles.forEach((el) => {
            el.addEventListener("click", function() {
                let state = document.body.getAttribute('data-navpanel');
                console.log(state);
                if (state != '1') {
                    document.body.setAttribute('data-navpanel', '1');
                } else {
                    document.body.setAttribute('data-navpanel', '0');
                }
            });
        });
        this.Watch();
    },

    Watch: function() {
        window.addEventListener("resize", function() {
            if (window.innerWidth > Header.maxWidth) {
                document.body.setAttribute('data-navpanel', '0');
            }
        });
    },
};

Header.Init();
