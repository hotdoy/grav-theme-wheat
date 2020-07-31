const Loading = {

	RemoveLoader: function(loader) {
		if (!!loader) {
		    loader.addEventListener('transitionend', () =>{
		    	loader.remove();
		    })
		}
	},

	SetLoadedState: function(context, delay, loader) {
		setTimeout(function(){ 
			if (!!context.classList.contains('loading')) {
				context.classList.add('loaded');
				context.classList.remove('loading');
				Loading.RemoveLoader(loader);
			}
		}, delay);
	},

	SetUnloadEvent: function(context) {
		if (!!context) {
			window.addEventListener('beforeunload', function (e) {
				context.classList.add('unloading');
			});
		}
	},

	Init: function() {
		const context = document.body;
		const loader = context.querySelectorAll('[data-loading]');
		const delay = loader[0].dataset.loadedStateDelay ? loader[0].dataset.loadedStateDelay : '0';
		Loading.SetLoadedState(context, delay, loader[0]);
		Loading.SetUnloadEvent(context);
	},

}

Loading.Init();
