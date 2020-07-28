(function () {

	'use strict';

	const InitLinks = function(){
		const body = document.body;
		const links = document.querySelectorAll('a');
		links.forEach(link => {

			let href = link.getAttribute('href');
			if (!!href && href.match('^http')) {
				link.setAttribute('target', '_blank');
				link.setAttribute('rel', 'noopener');
			}
			
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
