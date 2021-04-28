const Dialog = {

    initialized: false,
    resetDelay: 200,
    initDelay: 1000,
    lastHash:'',
    
    open: function(id) {
        const e = document.getElementById(id);
        if (!!e) {
            e.classList.add('dialog--active');
            Dialog.closeOnOutsideClick(e);
            Dialog.closeOnEscapeKey(e);
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

    closeOnOutsideClick: function(e) {
        const v = e.querySelector('.dialog__veil');
        v.addEventListener('click', function(event) {
            Dialog.closeAll();
        })
    },

    closeOnEscapeKey: function(e) {
        document.addEventListener('keydown', function(event) {
            if(event.key === 'Escape'){
                Dialog.close(e.id);
            }
        })
    },

    openByHash: function(hash, delay = 0) {
        if (hash.length) {
            setTimeout(function() {
                window.location.hash = hash;  
            }, delay);
        }
    },

    listenHashchange: function() {
        window.addEventListener('hashchange', function(event) {
            const hash = window.location.hash.substring(1);
            if (hash.length) {
                Dialog.open(hash);
            } else {
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

    init: function() {
        if (!Dialog.initialized) {
            Dialog.listenHashchange();
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
