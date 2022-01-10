// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
(function () {
	'use strict';

  const el = document.querySelector('.share')
	const copyBtn = el.querySelector(sels.copyBtn);
	const shareBtn = el.querySelector(sels.button);
	const copyResult = el.querySelector(sels.copyResult);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(location.href).then(
			function () {
				copyResult.innerHTML = 'Link copied!';
				copyResult.classList.add('display');
			},
			function () {
				copyResult.innerHTML = 'Copy failed.';
				copyResult.classList.add('display');
			}
		);
		setTimeout(function () {
			copyResult.classList.remove('display');
		}, 2000);
	};

	const initShare = () => {
		displayShare();
		if (shareBtn) {
			shareBtn.addEventListener('click', () => {
				navigator
					.share({
						title: document.title,
						url: location.href
					})
					.catch(() => {
						return;
					});
			});
		}

		if (copyBtn) {
			copyBtn.addEventListener('click', () => {
				navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
					if (result.state == 'granted' || result.state == 'prompt') {
						copyToClipboard();
					}
				});
			});
		}
	};

	initShare();
})();