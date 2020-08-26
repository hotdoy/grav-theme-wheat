(function () {
	
	'use strict';

	const InitHeader = function() {
		const b = document.body;
		const onTriggers = document.getElementsByClassName("header__toggle-panel");
		const offTriggers = document.getElementsByClassName("panel__toggle-panel");
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
