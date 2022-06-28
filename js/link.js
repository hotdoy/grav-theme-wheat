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
        // DO SOMETHING WITH INTERNAL LINKS
    };

    const ObserveMutation = function () {
        let o = new MutationObserver(SetLinkBehaviour);
        o.observe(document.body, {childList: true, subtree: true});
    };
    SetLinkBehaviour();
    ObserveMutation();
})();
