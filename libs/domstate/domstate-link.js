const DomStateLink = {
    ObserveMutation: function() {
        const target = document.querySelector("#main");
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(function() {
            DomStateLink.UpdateLink(document.querySelectorAll("a"));
        });
        observer.observe(target, config);
    },

    SetTargetBlank: function(el) {
        el.setAttribute("target", "_blank");
    },

    SetNoopener: function(el) {
        el.setAttribute("rel", "noopener");
    },

    SetDestination: function(href) {
        DomState.destination = href;
    },

    SetDestinationDepth: function() {
        DomState.SetDestinationDepth();
    },

    Navigate: function() {
        setTimeout(function(){ 
            window.location.href = DomState.destination;
        }, DomState.navDelay);
    },

    UpdateLink: function(els) {
        for (let el of els) {
            const href = el.getAttribute("href");

            // EXTERNAL
            if (!!href && href.match("^http")) {
                DomStateLink.SetTargetBlank(el);
                DomStateLink.SetNoopener(el);
            }

            // NAVIGATION
            else if (!!href && href.match("^/")) {
                el.addEventListener("click", function(event) {
                    event.preventDefault();
                    DomStateLink.SetDestination(href);
                    DomStateLink.SetDestinationDepth();
                    DomState.UpdateState();
                    DomStateLink.Navigate();
                }, false);
            }
        }
    },

    Init: function() {
        DomStateLink.UpdateLink(document.querySelectorAll("a"));
        DomStateLink.ObserveMutation();
    },
};

DomStateLink.Init();
