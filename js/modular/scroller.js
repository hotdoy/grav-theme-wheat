const Scroller = {

	Init: function() {
		document.querySelectorAll('.scroller').forEach(el => {

			let step = el.querySelector('.slide').clientWidth;
			const next = el.querySelector('.next');
			const prev = el.querySelector('.prev');
			const scrollCtn = el.querySelector('.container');

			let scroll = 100 * scrollCtn.scrollLeft / (scrollCtn.scrollWidth-scrollCtn.clientWidth); 
			console.log(scroll);
			if (scroll <= 1) {
				prev.classList.add('max');
			} else {
				prev.classList.remove('max');
			}
			if (scroll >= 99) {
				next.classList.add('max');
			} else {
				next.classList.remove('max');
			}

			scrollCtn.addEventListener('scroll', () => {
				let scroll = 100 * scrollCtn.scrollLeft / (scrollCtn.scrollWidth-scrollCtn.clientWidth); 
				console.log(scroll);
				if (scroll <= 1) {
					prev.classList.add('max');
				} else {
					prev.classList.remove('max');
				}
				if (scroll >= 99) {
					next.classList.add('max');
				} else {
					next.classList.remove('max');
				}
			});



			window.addEventListener('resize', () => {
				step = el.querySelector('.slide').clientWidth;
			});

			next.addEventListener('click', () => {
				scrollCtn.scrollBy(step, 0);
			});
			
			prev.addEventListener('click', () => {
				scrollCtn.scrollBy(-step, 0);
			});


		});
	},
};

Scroller.Init();
