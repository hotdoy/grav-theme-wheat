const App = {

	state: 'loading',
	domain: window.location.hostname,

	SetUnloadEvent: function () {
		window.addEventListener('beforeunload', function () {
			if (location.href.includes(App.domain)) {
				App.UpdateState('navigating');
			} else {
				App.UpdateState('exiting');
			}
		});
	},

	UpdateState: function (state) {
		App.state = state;
		console.log(App.state)
	},

  	Init: function () {
  		App.UpdateState('complete');
  		App.SetUnloadEvent();
  	},

};