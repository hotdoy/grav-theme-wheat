const Links = {

	Init: function(links, watch) {
		Links.Crawl(links);
		if (watch) {
			Links.Watch();
		}
	},

	Watch: function() {
		const target = document.querySelector('#main');
		const config = { childList: true, subtree: true };
		const observer = new MutationObserver(function(){
			Links.Init(document.body.querySelectorAll('a'), false);
		});
		observer.observe(target, config);
	},

	Crawl: function(links) {
		for (let link of links) {
			// href
			let href = link.getAttribute('href');
			// external
			if (!!href && href.match('^http')) {
				link.setAttribute('target', '_blank');
				link.setAttribute('rel', 'noopener');
			}
			// navigation
			else if (!!href && href.match('^/')) {
				link.addEventListener('click', function(event){
					
					event.preventDefault();
					document.body.classList.add('navigating');
			        setTimeout(function() {
			            window.location.href = href;
			        }, 100);

				}, false);
				let preLoadLink = document.createElement("link");
				preLoadLink.rel = 'prerender';
				preLoadLink.href = href;
				document.head.appendChild(preLoadLink);				
			}
		}
	},
}

Links.Init(document.body.querySelectorAll('a'), true);
