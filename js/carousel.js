(function () {
  "use strict";

  const initCarousel = function () {
    var swiper = new Swiper(".module.carousel .swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 20,
    });
  };

  initCarousel();
})();
