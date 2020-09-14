
let btn = document.querySelector('[data-pagination-btn]');
let ctn = document.querySelector('[data-pagination-ctn]');
	
btn.addEventListener('click',(event) => {

	event.preventDefault();

	let url = btn.getAttribute('href');
	let request = new XMLHttpRequest();
	request.responseType = 'document';
	request.open('GET', url, true);
	request.onload = function() {

		if (this.status >= 200 && this.status < 400) {
			// SUCCESS

			let results = this.response.querySelector('[data-pagination-ctn]').childNodes;

			console.log(results);

			// ctn.appendChild(results);

		
		} else {
			// SERVER ERROR
			console.log('PAGINATION - SERVER STATUS: ' + this.status);
		}

	};

	// ERROR
	request.onerror = function() {
		console.log('PAGINATION - ERROR');
	};

	request.send();
});


