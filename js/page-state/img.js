const Img = {
    Watch: function() {
        const target = document.querySelector("#main");
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(function() {
            Img.Init();
        });
        observer.observe(target, config);
    },

    SetAttr: function(el, state) {
        el.setAttribute('data-loading-state', state);
    },

    Init: function() {
        this.Watch();
        document.querySelectorAll('img', '[loading="lazy"]').forEach(el => {
            el.onload = () =>  Img.SetAttr(el, 'complete');
            if (el.complete) {
                Img.SetAttr(el, 'complete');
            }
        });
    },
};

Img.Init();
