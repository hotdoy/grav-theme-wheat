const PageState = {

	state: 'loading',
	protocol: location.protocol,
	hostname: window.location.hostname,
	href: window.location.href,
	destination: window.location.href,

	GetPageDepth: function (href) {
		href = href.replace(PageState.protocol + '//' + PageState.hostname, '');
		const depth = href.split('/').length - 1;
		return depth;
	},

	SetDestinationTracking: function () {
		const links = document.querySelectorAll("a");
		for (let link of links) {
			link.addEventListener('click', function (event) {
				PageState.destination = link.getAttribute("href");
				PageState.destinationDepth = PageState.GetPageDepth(PageState.destination);
			});
		}
	},

	SetBeforeUnloadEvent: function () {
		window.addEventListener('beforeunload', function (event) {
			if (PageState.destination.match('^/') || PageState.destination.includes(PageState.hostname)) {
				PageState.UpdateState('complete-navigating');
			} else {
				PageState.UpdateState('complete-exiting');
			}
		});
	},

	UpdateState: function (state) {
		PageState.state = state;
		PageState.UpdateStateAttr();
		console.log('%c PAGE_STATE: ' + PageState.state, 'color:green;');
	},

	UpdateStateAttr: function () {
		document.body.setAttribute('data-page-state', PageState.state);
	},

  	Init: function () {
  		PageState.depth = PageState.GetPageDepth(PageState.href);
  		PageState.UpdateStateAttr();
  		PageState.UpdateState('complete');
  		PageState.SetBeforeUnloadEvent();
  		PageState.SetDestinationTracking();
  	},

};