const DomStateLink = {

    path: '',
    depth: 0,
    delay: 0,

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
        els.forEach(el => {
            const href = el.getAttribute("href");
            if (!!href && href.match("^http")) {
                el.setAttribute("target", "_blank");
                el.setAttribute("rel", "noopener");
            } else if (!!href && href.match("^/")) {
                el.addEventListener("click", function(event) {
                    event.preventDefault();
                    DomStateLink.path = href;                    
                    DomStateLink.depth = DomState.GetDepth(DomStateLink.path);
                    if (DomStateLink.depth < DomState.depth) {
                        DomState.UpdateState('navigating-backward', 0, [DomStateLink.events.navigating, DomStateLink.events.navigatingBackward]);
                    } else if(DomStateLink.depth > DomState.depth) {
                        DomState.UpdateState('navigating-forward', 0, [DomStateLink.events.navigating, DomStateLink.events.navigatingForward]);
                    } else {
                        DomState.UpdateState('navigating', 0, [DomStateLink.events.navigating]);
                    }
                    setTimeout(function(){ 
                        window.location.href = DomStateLink.path;
                    }, DomStateLink.delay);
                }, false);
            }
        });
    },

    Init: function() {
        DomStateLink.UpdateLink(document.querySelectorAll("a"));
        DomStateLink.ObserveMutation();
    },
};

DomStateLink.Init();
