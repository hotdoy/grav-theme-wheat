(function () {
  	"use strict";

	const initCarousel = function () {
		var swiper = new Swiper(".module.carousel .swiper-container", {
	  		slidesPerView: "auto",
	  		scrollbar: {
		        el: '.swiper-scrollbar',
		     },
	  		spaceBetween: 10,
	  		breakpoints: {
	  			835: {
	  				spaceBetween: 20,
	  			},
			},
		});
	};

  	initCarousel();
})();
