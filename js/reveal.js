const Rvl = {

	Intersect: function (entries) {
		for (let entry of entries) {
	
			const e = entry.target;

			if (entry.isIntersecting) {
				if (!e.classList.contains('rvl--current')) {
					e.classList.add('rvl--current');
				}
			} else {
				if (e.classList.contains('rvl--current')) {
					e.classList.remove('rvl--current');
				}
			}
		}
	},

	Observe: function (e, o) {
		let observer = new IntersectionObserver(Rvl.Intersect, o);
		observer.observe(e);
	},

	GetOptions: function () {
		const o = {
			root: null, 
			rootMargin: '0px', 
			threshold: 0.1,
		}
		return o;
	},
 
	GetInitialDelay: function () {
		const e = document.querySelector("[data-reveal-delay]");
		const delay = e ? e.dataset.revealDelay : '0';
		return delay;
	},

	Init: function () {
		const el = document.querySelectorAll('[data-reveal]');
		for (let e of el) {
			if (!e.classList.contains('sntnl')) {
				e.removeAttribute('data-reveal');
				let o = Rvl.GetOptions();
				e.classList.add('rvl');
				setTimeout(function () {
					for (let e of el) {
						Rvl.Observe(e, o);
					}
				}, Rvl.GetInitialDelay());

			}
		}
	}
}

Rvl.Init();
