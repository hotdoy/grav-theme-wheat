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
        el.setAttribute('data-domstate', state);
    },

    Init: function() {
        DomState.Log('img');
        this.ObserveMutation();
        document.querySelectorAll('img').forEach(el => {
            el.onload = () =>  this.SetAttr(el, 'complete');
            if (el.complete) {
                this.SetAttr(el, 'complete');
            }
        });
    },
};

document.addEventListener('domstateInteractive', () => {
    DomStateImg.Init();
});
