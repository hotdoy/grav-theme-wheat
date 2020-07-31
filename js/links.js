(function () {

	'use strict';

	const InitLinks = function(){
		const body = document.body;
		const links = document.querySelectorAll('a');
		links.forEach(link => {

			// get the href
			let href = link.getAttribute('href');

			// external
			if (!!href && href.match('^http')) {
				link.setAttribute('target', '_blank');
				link.setAttribute('rel', 'noopener');
			}

			// go back in history if referrer includes the href
			// The href should usially be the index of your site and will be used as fallback
			else if (link.hasAttribute('data-history-back')) {
				console.log('back');
				link.addEventListener('click',(event) => {
					event.preventDefault();
					if (document.referrer.includes(href)) {
						history.back();
					} else {
						window.location.href = href;
					}
					body.classList.add('navigating');
				});
			}

			// internal
			else if (!!href && href.match('^/')) {
				link.addEventListener('click', function(event){
					body.classList.add('navigating');
				}, false);
				let preLoadLink = document.createElement("link");
				preLoadLink.rel = 'prerender';
				preLoadLink.href = href;
				document.head.appendChild(preLoadLink);				
			}
		})
	}

	InitLinks();

})();
