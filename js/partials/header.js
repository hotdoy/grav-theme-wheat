(function () {
	"use strict";

 	const body = document.body;
  	const header = document.querySelector('#header');
  	let lastScroll = 0;

    header.setAttribute('data-state', '0');
  
	window.addEventListener("scroll", () => {
		const currentScroll = window.pageYOffset;
		
		// down
		if (currentScroll > lastScroll + 10) {
			header.setAttribute('data-state', '1');
		// up
		} else if (currentScroll < lastScroll -10) {
			header.setAttribute('data-state', '2');
		}

    	lastScroll = currentScroll;
  	});
  
})();
