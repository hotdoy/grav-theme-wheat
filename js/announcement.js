var Announcement = (function () {
  var self = {};

  var AddActionDone = function (id, store) {
    let e = document.createElement("button");
    e.className = "announcement__done";
    e.addEventListener("click", function () {
      if (!!store && store == 1) {
        localStorage.setItem(id, Date.now());
      }
      this.parentNode.remove();
    });
    return e;
  };

  self.CreateAnnouncement = function (id, classes, store, content) {
    let e = document.createElement("div");
    e.className = "announcement " + classes;
    e.innerHTML = content;
    e.appendChild(AddActionDone(id, store));
    $("body").append(e);
  };

  self.Init = function () {
    let a = document.querySelectorAll("[data-announcement]");
    a.forEach((b) => {
      let id = b.dataset.id;
      let classes = b.dataset.class;
      let store = b.dataset.store;
      let content = b.innerHTML;
      let storedValue = id ? localStorage.getItem(id) : null;
      if (
        (storedValue == null || Date.now() - storedValue > 86400000) &&
        content
      ) {
        self.CreateAnnouncement(id, classes, store, content);
      }
      b.remove();
    });
  };

  return self;
})();

Announcement.Init();
