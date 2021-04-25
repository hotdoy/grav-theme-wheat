const Dialog = {

    resetDelay: 200,
    
    open: function(id) {
        const e = document.getElementById(id);
        e.classList.add('dialog--active');
        Dialog.closeOnOutside(e);
    },

    close: function(id) {
        const e = document.getElementById(id);
        e.classList.remove('dialog--active');
        Dialog.reset(e);
    },

    closeOnOutside: function(e) {
        if (!!e) {
            e.querySelectorAll('.dialog__veil')[0].addEventListener('click', function() {
                Dialog.close(e.id);
            })
        }
    },

    reset: function(e) {
        if (!!e) {
            setTimeout(function() {
                const clone = e.cloneNode(true);
                e.parentNode.replaceChild(clone, e);
            }, Dialog.resetDelay);
        }
    },    
};
