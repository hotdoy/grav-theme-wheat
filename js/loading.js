const Loading = {

	Remove: function(loader) {
		if (!!loader) {
		    loader.addEventListener('transitionend', () =>{
		    	loader.remove();
		    })
		}
	},

	Loaded: function(context, delay, loader) {
		setTimeout(function(){ 
			if (!!context.classList.contains('loading')) {
				context.classList.add('loaded');
				context.classList.remove('loading');
				Loading.Remove(loader);
			}
		}, delay);
	},

	Init: function() {
		const context = document.body;
		const loader = document.getElementById("loading");
		const delay = loader.dataset.loadedDelay ? loader.dataset.loadedDelay : '0';
		Loading.Loaded(context, delay, loader);
	},

}

Loading.Init();

// Use transitions for the loader and animations for whatever moving things you put in it
