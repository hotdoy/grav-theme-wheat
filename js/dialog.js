const Dialog = {

    e: null,
    hash:'',
    resetDelay: 200,

    watch: function() {
        window.addEventListener('hashchange', function() {
            if (!!document.querySelectorAll(window.location.hash + ' .dialog')) {
                Dialog.e = document.getElementById(window.location.hash.substring(1));
                Dialog.toggle();
                Dialog.watchOutsideClick();
            }
        });
    },

    toggle: function() {
        if (!!Dialog.e) {
            if (!Dialog.e.classList.contains('dialog--active')) {
                Dialog.e.classList.add('dialog--active');
            } else {
                Dialog.e.classList.remove('dialog--active');
                Dialog.reset();
            }
        }
    },

    watchOutsideClick: function() {
        if (!!Dialog.e) {
            Dialog.e.querySelectorAll('.dialog__veil')[0].addEventListener('click', function() {
                Dialog.toggle();
            })
        }
    },

    // watchEscapeKey: function() {},

    reset: function() {
        if (!!Dialog.e) {
            setTimeout(function() {
                const clone = Dialog.e.cloneNode(true);
                Dialog.e.parentNode.replaceChild(clone, Dialog.e);
                Dialog.e = null;
                history.pushState("", document.title, window.location.pathname + window.location.search);
            }, Dialog.resetDelay);
        }
    },
};

Dialog.watch();