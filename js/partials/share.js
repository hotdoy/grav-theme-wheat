// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
(function () {
	'use strict';
	const share = document.getElementById('share');
	const nativeShare = share.querySelector('.native');
	const shareData = {
		title: document.title,
		text: document.querySelector('meta[name="description"]').content,
		url: location.href
	  }

	const initShare = () => {
		nativeShare.addEventListener('click', async () => {
			try {
				await navigator.share(shareData);
				console.log('Shared!');
			} catch(err) {
				console.log('Error while sharing.');
			}
		});			
	};

	// initShare();
})();
