(function () {
  "use strict";

  const InitHeader = function () {
    const b = document.body;
    const onTriggers = document.getElementsByClassName("js-panel-open");
    const offTriggers = document.getElementsByClassName("js-panel-close");
    let lastOffset = 0;

    for (let onTrigger of onTriggers) {
      onTrigger.addEventListener("click", function () {
        b.classList.add("panel--open");
      });
    }

    for (let offTrigger of offTriggers) {
      offTrigger.addEventListener("click", function () {
        b.classList.remove("panel--open");
      });
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth > 735 && b.classList.contains("panel--open")) {
        b.classList.remove("panel--open");
      }
    });
  };

  InitHeader();
})();
