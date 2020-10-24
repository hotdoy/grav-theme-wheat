(function () {
  "use strict";

  const initProduct = function () {
    // Swiper
    var swiper = new Swiper(".product .product-showcase .swiper-container", {
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  };

  initProduct();
})();
