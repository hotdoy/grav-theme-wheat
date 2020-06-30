(function () {

	'use strict';

	const InitCollection = function(){
		let sel = '.collection .swiper-container';
		let el = document.querySelectorAll(sel);
		for (let e of el) {
			let id = e.id;
			let swiper = new Swiper('#'+id, {
				slidesPerView: 'auto',
				spaceBetween: 30,
			});
		}
	}

	InitCollection();
	
})();
