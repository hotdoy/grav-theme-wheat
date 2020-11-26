// sentinel.js

const Sntnl = {

	ToggleClass: function (entry) {
		const e = entry.target;
		e.classList.add('sntnl--intersecting');
	},

	Intersect: function (entries) {
		console.log('intersecting');

		for (let entry of entries) {
			if (entry.isIntersecting) {
				Sntnl.ToggleClass(entry);
			} 
		}
	},

	Observe: function (e, o) {
		let observer = new IntersectionObserver(Sntnl.Intersect, o);
		observer.observe(e);
		console.log('observing');
	},

	Init: function () {
		for (let e of document.querySelectorAll('.sntnl')) {
		let o = {
			root: null,
			rootMargin: '0px',
			threshold: 0,
		}	
			Sntnl.Observe(e, o);
		}
	}
}

Sntnl.Init();