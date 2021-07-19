const Scroller = {

	UpdateNav: function(scrollCtn, prev, next) {
		const scroll = 100 * scrollCtn.scrollLeft / (scrollCtn.scrollWidth-scrollCtn.clientWidth); 

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

		return;
	},

	Init: function() {
		document.querySelectorAll('.scroller').forEach(el => {

			let step = el.querySelector('.scroller__slide').clientWidth;
			const prev = el.querySelector('.scroller__prev');
			const next = el.querySelector('.scroller__next');
			const scrollCtn = el.querySelector('.scroller__scrollctn');
			this.UpdateNav(scrollCtn, prev, next);
			scrollCtn.addEventListener('scroll', () => {
				this.UpdateNav(scrollCtn, prev, next);
			});

			window.addEventListener('resize', () => {
				step = el.querySelector('.scroller__slide').clientWidth;
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