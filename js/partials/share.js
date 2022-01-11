(function () {
	'use strict';
	const initShare = function() {
		const share = document.getElementById('share');
		if (share) {
			const system = share.querySelector('.system');
			const fallback = share.querySelector('.fallback');
			const shareData = {
				title: document.title,
				text: document.querySelector('meta[name="description"]').content,
				url: location.href
			};

			if (navigator.canShare && location.protocol === 'https:') {
				fallback.remove();
				system.querySelector('a').addEventListener('click', async () => {
					try {
						await navigator.share(shareData);
						console.log('Shared!');
					} catch(err) {
						console.log('Error while sharing.');
					}
				});				
			} else {
				system.remove();
			}
		}		
	};
	initShare();
})();
