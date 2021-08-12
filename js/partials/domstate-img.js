const stateImg = {
    ObserveMutation: function() {
        const target = document.querySelector("#main");
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(function() {
            stateImg.Init();
        });
        observer.observe(target, config);
    },

    SetAttr: function(el, state) {
        el.setAttribute('data-state', state);
    },

    Init: function() {
        this.ObserveMutation();
        document.querySelectorAll('img').forEach(el => {
            el.onload = () =>  this.SetAttr(el, 'complete');
            if (el.complete) {
                this.SetAttr(el, 'complete');
            }
        });
    },
};

document.addEventListener('domstateReady', () => {
    stateImg.Init();
});