const DomStateImg = {
    ObserveMutation: function() {
        const target = document.querySelector("#main");
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(function() {
            DomStateImg.Init();
        });
        observer.observe(target, config);
    },

    SetAttr: function(el, state) {
        el.setAttribute('data-state', state);
    },

    RemPh: function(el) {
        el.removeAttribute('style');
    },

    Init: function() {
        this.ObserveMutation();
        document.querySelectorAll('img').forEach(el => {
            el.onload = function() {
                DomStateImg.SetAttr(el, 'complete');
                DomStateImg.RemPh(el);
            };
            if (el.complete) {
                DomStateImg.SetAttr(el, 'complete');
                DomStateImg.RemPh(el);
            };
        });
    },
};

document.addEventListener('domstateReady', () => {
    DomStateImg.Init();
});
