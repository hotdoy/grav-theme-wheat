const Links = {

	context: document.body,

	Init: function() {
		let a = Links.context.querySelectorAll('a')
		a.forEach(a => {

			// href
			let href = a.getAttribute('href');

			// external
			if (!!href && href.match('^http')) {
				a.setAttribute('target', '_blank');
				a.setAttribute('rel', 'noopener');
			}

			// navigation
			else if (!!href && href.match('^/')) {
				a.addEventListener('click', function(event){
					
					event.preventDefault();
					Links.context.classList.add('navigating');
			        setTimeout(function() {
			            window.location.href = href;
			        }, 100);

				}, false);
				let preLoadLink = document.createElement("link");
				preLoadLink.rel = 'prerender';
				preLoadLink.href = href;
				document.head.appendChild(preLoadLink);				
			}
		})
	},
}

Links.Init();
