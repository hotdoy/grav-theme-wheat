var request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1/wheat/fr/men', true);

request.onload = function() {
	if (this.status >= 200 && this.status < 400) {
		console.log('Cake :D');
		var resp = this.response;
	} else {
		console.log('Some cake :)');
	}
};

request.onerror = function() {
	console.log('No cake :(');
};

request.send();