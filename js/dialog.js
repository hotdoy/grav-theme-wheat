const Dialog = {

    resetDelay: 200,
    
    open: function(id) {
        const e = document.getElementById(id);
        e.classList.add('dialog--active');
        Dialog.closeOnOutsideClick(id);
    },

    close: function(id) {
        const e = document.getElementById(id);
        e.classList.remove('dialog--active');
        Dialog.reset(id);
    },

    closeAll: function() {
        const el = document.querySelectorAll('.dialog');
        for (let e of el) {
            Dialog.close(e.id);
        }
    },

    // THIS DOES NOT WORK
    closeOnOutsideClick: function(id) {
        const e = document.getElementById(id);
        const veil = e.querySelectorAll('.dialog__veil');
        console.log('1');
        for(let v of veil) {
            console.log('2');
            v.addEventListener('click', function(event) {
                console.log('3');
                Dialog.close(id);
            })
        }
    },

    reset: function(id) {
        const e = document.getElementById(id);
        if (!!e) {
            setTimeout(function() {
                const clone = e.cloneNode(true);
                e.parentNode.replaceChild(clone, e);
            }, Dialog.resetDelay);
        }
    },

    watch: function() {
        window.addEventListener('hashchange', function(event) {
            Dialog.init();
        })
    },

    init: function() {
        Dialog.closeAll();
        const hash = window.location.hash;
        if (!!hash) {
            const el = document.querySelectorAll('.dialog' + hash);
            for (let e of el) {
                Dialog.open(e.id); 
            }              
        }
        Dialog.watch();
    },
};

Dialog.init();
