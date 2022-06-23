(function () {
	"use strict";

    const SetLinkBehaviour = function () {
        document.querySelectorAll('a').forEach(el => {
            const url = el.getAttribute('href');
            const targetAttr = el.getAttribute('target');
            if (!!url) {
                if (!!targetAttr) {
                    return;
                }
                else if (url.match("^http") || url.match("^mailto:") || url.match("^tel:")) {
                    SetExtLinkBehaviour(el);
                } 
                else if (url.match("^/")) {
                    SetIntLinkBehaviour(el);
                }                
            }
        });
    };

    const SetExtLinkBehaviour = function(el) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
    };

    const SetIntLinkBehaviour = function(el) {
        // el.addEventListener("click", function(e) {
        //     e.preventDefault();
        //     const destinationPath = el.getAttribute("href");
        //     App.setDestinationPath(destinationPath);
        //     App.setDestinationDepth()         

        //     if (App.destinationDepth < App.currentDepth) {
        //         App.setState(App.body, '_012_nav-b', 0, [App.events.navigating, App.events.navigatingBackward]);

        //     } else if(App.destinationDepth > App.currentDepth) {
        //         App.setState(App.body, '_012_nav-f', 0, [App.events.navigating, App.events.navigatingForward]);

        //     } else {
        //         App.setState(App.body,'_012_nav', 0, [App.events.navigating]);
        //     }
        //     setTimeout(function(){ 
        //         window.location.href = App.destinatioPath;
        //     }, App.navigationDelay);

        // }, false);
    };

    const ObserveMutation = function () {
        let o = new MutationObserver(SetLinkBehaviour);
        o.observe(document.body, {childList: true, subtree: true});
    };

    SetLinkBehaviour();
    ObserveMutation();
})();
