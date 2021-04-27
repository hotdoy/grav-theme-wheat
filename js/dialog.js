const Dialog = {

    initialized: false,
    resetDelay: 200,
    initDelay: 1000,
    
    open: function(id) {
        const e = document.getElementById(id);
        if (!!e) {
            e.classList.add('dialog--active');
            Dialog.listenOutsideClick(e);
            Dialog.listenEscapeKey(e);
        }
    },

    close: function(id) {
        const e = document.getElementById(id);
        if (!!e) {
            e.classList.remove('dialog--active');
            Dialog.reset(id);            
        }
    },

    closeAll: function() {
        const el = document.querySelectorAll('.dialog');
        for (let e of el) {
            Dialog.close(e.id);
        }
    },

    listenOutsideClick: function(e) {
        const v = e.querySelector('.dialog__veil');
        v.addEventListener('click', function(event) {
            Dialog.closeAll();
        })
    },

    listenEscapeKey: function(e) {
        document.addEventListener('keydown', function(event) {
            if(event.key === 'Escape'){
                Dialog.closeAll();
            }
        })
    },

    reset: function(id) {
        const e = document.getElementById(id);
        if (!!e) {
            setTimeout(function() {
                const clone = e.cloneNode(true);
                e.parentNode.replaceChild(clone, e);
            }, Dialog.resetDelay);
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    },

    watch: function() {
        window.addEventListener('hashchange', function(event) {
            const hash = window.location.hash.substring(1);
            if (hash.length) {
                Dialog.open(hash);
            } else {
                Dialog.closeAll();
            }
        })
    },

    init: function() {
        if (!Dialog.initialized) {
            Dialog.watch();
            Dialog.initialized = true;
        }
        const hash = window.location.hash.substring(1);
        if (hash.length) {
            setTimeout(function() {
                Dialog.open(hash);
            }, Dialog.initDelay);
        }
    },
};

Dialog.init();
