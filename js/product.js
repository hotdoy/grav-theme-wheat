(function () {
  "use strict";

  const initProduct = function () {
    // Swiper
    var swiper = new Swiper(".product__showcase .swiper-container", {
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  };

  initProduct();
})();
