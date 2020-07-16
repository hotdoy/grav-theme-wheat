(function () {
	
	'use strict';

	const InitHeader = function() {
		const b = document.body;
		const onTriggers = document.getElementsByClassName("header__on");
		const offTriggers = document.getElementsByClassName("header__off");
		let lastOffset = 0;

		for (let onTrigger of onTriggers) {
			onTrigger.addEventListener("click", function(){
				b.classList.add("header--on");
			})
		}

		for (let offTrigger of offTriggers) {
			offTrigger.addEventListener("click", function(){
				b.classList.remove("header--on");
			})
		}

		window.addEventListener('resize', function(){
			if (window.innerWidth > 735 && b.classList.contains("header--on")) {
				b.classList.remove("header--on");
			}
		});

	}

	InitHeader();

})();
