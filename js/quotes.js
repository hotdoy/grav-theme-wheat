(function () {
  "use strict";

  const initQuotes = function () {
    var swiper = new Swiper(".module.quotes .swiper-container", {
      spaceBetween: 30,
      centeredSlides: true,
      effect: "fade",
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  };

  initQuotes();
})();
