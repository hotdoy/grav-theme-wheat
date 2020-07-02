(function () {

	'use strict';

	const InitShare = function(){

        const shareButtons = document.querySelectorAll('.share__button');
        const shareDialog = document.getElementById('share__dialog');

        for (let shareButton of shareButtons ) {
            
            const title = document.title;
            const url = window.location.href;

            shareButton.addEventListener('click', event => {
                // if (navigator.share) {
                //     navigator.share({
                //         title: title,
                //         url: url
                //     })
                //     console.log('Thanks for sharing!');
                // } else {
                    console.log('Share API not supported!');
                    shareDialog.classList.add('share__dialog--on');
                // }
            })
        }

	}

	InitShare();

})();
