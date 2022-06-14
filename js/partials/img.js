(function () {
	"use strict";
    const SetImgBehavior = function () {
        document.querySelectorAll('img').forEach(el => {
            el.onload = function() {
                el.setAttribute('data-state', '1');
                el.removeAttribute('style');
            };
            if (el.complete) {
                el.setAttribute('data-state', '1');
                el.removeAttribute('style');
            };
        });
    };
    const ObserveMutation = function () {
        let o = new MutationObserver(SetImgBehavior);
        o.observe(document.body, {childList: true, subtree: true});
    };
    SetImgBehavior();
    ObserveMutation();
})();
