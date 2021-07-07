const DomStateLink = {

    events: {
        navigating: new Event('domstateNavigating'),
        navigatingForward: new Event('domstateNavigatingForward'),
        navigatingBackward: new Event('domstateNavigatingBackward'),
    },
    
    ObserveMutation: function() {
        const target = document.querySelector("#main");
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(function() {
            DomStateLink.UpdateLink(document.querySelectorAll("a"));
        });
        observer.observe(target, config);
    },

    UpdateLink: function(els) {
        for (let el of els) {

            const href = el.getAttribute("href");

            // EXTERNAL
            if (!!href && href.match("^http")) {
                el.setAttribute("target", "_blank");
                el.setAttribute("rel", "noopener");
            }

            // NAVIGATION
            else if (!!href && href.match("^/")) {

                el.addEventListener("click", function(event) {
                    event.preventDefault();
                    DomState.navigating.path = href;                    
                    DomState.navigating.depth = DomState.GetDepth(DomState.navigating.path);

                    if (DomState.navigating.depth < DomState.interactive.depth) {
                        DomState.UpdateState('navigating-backward', 0);
                        document.dispatchEvent(DomStateLink.events.navigatingBackward);
                    } else if(DomState.navigating.depth > DomState.interactive.depth) {
                        DomState.UpdateState('navigating-forward', 0);
                        document.dispatchEvent(DomStateLink.events.navigatingForward);
                    } else {
                        DomState.UpdateState('navigating', 0);
                        document.dispatchEvent(DomStateLink.events.navigating);
                    }

                    setTimeout(function(){ 
                        window.location.href = DomState.navigating.path;
                    }, DomState.navigating.delay);

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
