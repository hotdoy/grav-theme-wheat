var Announcement = (function(){
    var self = {};

    var AddActionDone = function(id, store) {
        let e = document.createElement('div');
        e.className = 'announcement__done';
        e.addEventListener("click", function () {
            if (!!store && store == 1) {
               localStorage.setItem(id, Date.now()); 
            }
            this.parentNode.remove();
        });
        return e;
    }

    self.CreateAnnouncement = function(id, theme, store, msg) {
        let e = document.createElement('div');
        e.className = 'announcement ' + theme;
        e.innerHTML = msg;
        e.appendChild(AddActionDone(id, store));
        $('body').append(e);
    }

    self.Init = function() {
        let a = document.querySelectorAll('[data-announcement]');
        a.forEach(b => {
            let id = b.dataset.id;
            let theme = b.dataset.theme;
            let store = b.dataset.store;
            let msg = b.innerHTML;
            let storedValue = id ? localStorage.getItem(id) : null;  
            if ((storedValue == null || Date.now() - storedValue > 86400000) && msg) {
                self.CreateAnnouncement(id, theme, store, msg);            
            };
            b.remove();

        });
    }

    return self;
}());

Announcement.Init();
