const Reveal = {

	defaultRevealClass: "reveal",
	defaultHiddenClass: "reveal--hidden",
	defaultInitialDelay: 0,


	Reveal: function(e) {
		const classes = Reveal.GetRevealClass(e)
	    e.addEventListener('animationend', () =>{
	    	e.classList.remove(Reveal.defaultHiddenClass);	
	    })
	    e.classList.add(...classes);
	},


	GetRevealClass: function(e) {
		if (!!e) {
			const rawClass = e.dataset.reveal.length ? e.dataset.reveal : Reveal.defaultRevealClass;
			const classArray = rawClass.split(" ");
			return classArray;
		}
	},


	GetAutoRevealClass: function(e) {
		if (!!e) {
			const rawClass = e.dataset.autoReveal.length ? e.dataset.autoReveal : Reveal.defaultRevealClass;
			const classArray = rawClass.split(" ");
			return classArray;
		}
	},


	PropagateAutoReveal: function(context) {
		const el = context.querySelectorAll("[data-auto-reveal]");
		if (!!el) {
			for (let e of el) {
				const classList = Reveal.GetAutoRevealClass(e);
				const children = e.children;
				if (!!children) {
					for (let c of children) {
						c.setAttribute("data-reveal", classList);
					}
				}
			}		
		}
	},


	GetInitialDelay: function() {
		const e = document.querySelector("[data-reveal-delay]");
		const delay = e ? e.dataset.revealDelay : Reveal.defaultInitialDelay;
		return delay;
	},


	HideElements: function(el) {
		for (let e of el){
			e.classList.add(Reveal.defaultHiddenClass);
		}
	},


	Observe: function(el) {
		const observer = new IntersectionObserver(onIntersection, {rootMargin: '0px', threshold: 0.01});
		setTimeout(function(){
			for (let e of el){
				observer.observe(e);
			}
		}, Reveal.GetInitialDelay());

		function onIntersection(el) {
			for (let e of el) {
				if (e.intersectionRatio > 0) {
					observer.unobserve(e.target);
					Reveal.Reveal(e.target);
				}
			}
		}
	},


	Init: function(context) {
		Reveal.PropagateAutoReveal(context);
		const el = context.querySelectorAll("[data-reveal]");
		Reveal.HideElements(el);
		Reveal.Observe(el);
	},

};

Reveal.Init(document.body);
