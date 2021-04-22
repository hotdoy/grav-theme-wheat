const Dialog = {

    watch: function() {
        window.addEventListener('hashchange', function() {
            if (!!document.querySelectorAll(window.location.hash + ' .dialog')) {
                Dialog.toggle(window.location.hash.substring(1));
            }
        });
    },

    toggle: function(id) {
        const e = document.getElementById(id);
        if (!!e) {
            if (!e.classList.contains('dialog--active')) {
                e.classList.add('dialog--active');
            } else {
                e.classList.remove('dialog--active');
            }
        }
    },

    watchOutsideClick: function(){},
    watchEscapeKey: function(){},
    watchHistoryBack: function(){},

};

Dialog.watch();