(function () {
	
	'use strict';

	const InitHeader = function() {
		const b = document.body;
		const onTriggers = document.getElementsByClassName("header__toggle-on");
		const offTriggers = document.getElementsByClassName("header__toggle-off");

		for (let onTrigger of onTriggers) {
			onTrigger.addEventListener("click", function(){
				b.classList.add("header--deployed");
			})
		}

		for (let offTrigger of offTriggers) {
			offTrigger.addEventListener("click", function(){
				b.classList.remove("header--deployed");
			})
		}

		window.addEventListener("scroll", function(){
		   	let currentOffset = window.pageYOffset || document.documentElement.scrollTop;
		   	if (window.pageYOffset > 200){
				b.classList.add("header--scrolled"); 
		   	} else if (window.pageYOffset < 200) {
		    	b.classList.remove("header--scrolled");
		   	}
		}, false);
	}

	InitHeader();

})();
