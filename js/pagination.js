const Pagination = {

	Request: function(ctn, btn, url) {
		let request = new XMLHttpRequest();
		request.responseType = 'document';
		request.open('GET', url, true);
		request.onload = function() {

			if (this.status >= 200 && this.status < 400) {
				
				// Get new articles and append them to the pahination ctn
				let articles = this.response.querySelector('[data-pagination-ctn]').childNodes;
				for (var i = articles.length - 1; i >= 0; i--) {
					ctn.appendChild(articles[i]);
				}

				// Get new pagination button and replace the old one
				let newBtn = this.response.querySelector('[data-pagination-btn]');
				if (!!newBtn) {
					btn.parentNode.replaceChild(newBtn, btn);
				} else {
					btn.parentNode.remove();
				}

				// Init next pagination
				Pagination.Init();
				
			} else {
				console.log('PAGINATION - SERVER STATUS: ' + this.status);
			}

		};

		request.onerror = function() {
			console.log('PAGINATION - ERROR');
		};

		request.send();
	},


	Init: function() {
		const ctn = document.querySelector('[data-pagination-ctn]');
		const btn = document.querySelector('[data-pagination-btn]');
		const url = btn.getAttribute('href');

		if (!!ctn && !!btn && !!url) {
			btn.addEventListener('click',(event) => {
				event.preventDefault();
				Pagination.Request(ctn, btn, url);
			});
		}
	},
}

Pagination.Init();
