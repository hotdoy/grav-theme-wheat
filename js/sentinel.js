// sentinel.js

const Sntnl = {

	Intersect: function (entries) {
		for (let entry of entries) {
			const e = entry.target;
			if (entry.isIntersecting) {
				if (!e.classList.contains('sntnl--in')) {
					e.classList.add('sntnl--in');
				}
			} else {
				if (e.classList.contains('sntnl--in')) {
					e.classList.remove('sntnl--in');
					e.classList.add('sntnl--out');
				}
			}
		}
	},

	Observe: function (e, o) {
		let observer = new IntersectionObserver(Sntnl.Intersect, o);
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
		const e = document.querySelector("[data-sentinel-initial-delay]");
		const delay = e ? e.dataset.sentinelInitialDelay : '0';
		return delay;
	},

	Init: function () {
		const el = document.querySelectorAll('[data-sentinel]');
		for (let e of el) {
			if (!e.classList.contains('sntnl')) {
				e.removeAttribute('data-sentinel');
				let o = Sntnl.GetOptions();
				e.classList.add('sntnl');
				setTimeout(function () {
					for (let e of el) {
						Sntnl.Observe(e, o);
					}
				}, Sntnl.GetInitialDelay());

			}
		}
	}
}

Sntnl.Init();
