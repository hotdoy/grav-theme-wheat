const PageState = {

	state: 'loading',
	domain: window.location.hostname,

	SetUnloadEvent: function () {
		window.addEventListener('beforeunload', function () {
			if (location.href.includes(PageState.domain)) {
				PageState.UpdateState('navigating');
			} else {
				PageState.UpdateState('exiting');
			}
		});
	},

	UpdateState: function (state) {
		PageState.state = state;
		PageState.UpdateStateAttr();
		console.log('%c PageState: ' + PageState.state, 'color:green;');
	},

	UpdateStateAttr: function () {
		document.body.setAttribute('data-page-state', PageState.state);
	},

  	Init: function () {
  		PageState.UpdateStateAttr();
  		PageState.UpdateState('complete');
  		PageState.SetUnloadEvent();
  	},

};