const Pagination = {

	ctn: {},
	btn: {},
	url: {},
	result: {},

	Request: function() {
		let request = new XMLHttpRequest();
		request.responseType = 'document';
		request.open('GET', Pagination.url, true);
		request.onload = function() {
			if (this.status >= 200 && this.status < 400) {
				Pagination.result = this.response;
				Pagination.AppendResult();			
			} else {
				console.log('PAGINATION - SERVER STATUS: ' + this.status);
			}
		};
		request.onerror = function() {
			console.log('PAGINATION - ERROR ' + this.status);
		};
		request.send();
	},

	AppendResult: function() {
		const articles = Pagination.result.querySelector('[data-pagination-ctn]').innerHTML;
		Pagination.ctn.insertAdjacentHTML('beforeend', articles);
		Pagination.ReplaceBtn();
		Pagination.UpdateParams();
	},

	ReplaceBtn: function() {
		let newBtn = Pagination.result.querySelector('[data-pagination-btn]');
		if (!!newBtn) {
			Pagination.btn.parentNode.replaceChild(newBtn, Pagination.btn);
		} else {
			Pagination.btn.parentNode.remove();
		}
		Pagination.Init();
	},

	UpdateParams: function() {
		const key = 'articles';
		const length = Pagination.ctn.children.length;
		const value = '0-' + length;
		const params = new URLSearchParams();
		params.set(key, value);
		window.history.replaceState({}, '', `${location.pathname}?${params}`);
	},

	Init: function() {
		Pagination.ctn = document.querySelector('[data-pagination-ctn]');
		Pagination.btn = document.querySelector('[data-pagination-btn]');
		if (!!Pagination.btn) {
			Pagination.url = Pagination.btn.getAttribute('href');
			if (!!Pagination.ctn && !!Pagination.url) {
				Pagination.btn.addEventListener('click',(event) => {
					event.preventDefault();
					Pagination.btn.setAttribute('data-pagination-btn','requesting');
					Pagination.Request();
				});
			}
		}
	},	
}

Pagination.Init();
