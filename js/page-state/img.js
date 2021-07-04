const Img = {

    SetAttr: function(el, state) {
        el.setAttribute('data-loading-state', state);
    },

    Init: function() {
        document.querySelectorAll('img', '[loading="lazy"]').forEach(el => {
            el.onload = function () {
                Img.SetAttr(el, 'complete')
            };
        });
    },
};

Img.Init();
