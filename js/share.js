(function () {

	'use strict';

	const InitShare = function(){

        const shareButtons = document.querySelectorAll('.share__button');
        const shareDialog = document.getElementById('share__dialog');
        const closeDialogButton = document.getElementsByClassName('share__dialog__close');
        const title = document.title;
        const url = window.location.href;
        const targetFacebook = document.getElementById('share-target-facebook');
        const targetTwitter = document.getElementById('share-target-twitter');
        const targetLinkedin = document.getElementById('share-target-linkedin');
        const targetEmail = document.getElementById('share-target-email');
        const targetReddit = document.getElementById('share-target-reddit');

        // Share Buttons
        for (let shareButton of shareButtons ) {
            
            shareButton.addEventListener('click', event => {
                if (navigator.share) {
                    navigator.share({
                        title: title,
                        url: url
                    })
                    console.log('Thanks for sharing!');
                } else {
                    console.log('Share API not supported!');
                    shareDialog.classList.add('share__dialog--on');
                }
            })
        }

        // Close button
        for (let btn of closeDialogButton) {
            btn.addEventListener('click', event => {
                if (shareDialog.classList.contains('share__dialog--on')) {
                    shareDialog.classList.remove('share__dialog--on');
                }
                event.stopImmediatePropagation;
            })
        }

        // Close by outside click 
        shareDialog.addEventListener('click', event => {
            if (event.target == shareDialog && shareDialog.classList.contains('share__dialog--on')) {
                shareDialog.classList.remove('share__dialog--on');
            }
        })

        // Facebook
        targetFacebook.addEventListener('click', event => {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        })

        // Twitter
        targetTwitter.addEventListener('click', event => {
            window.open(`https://twitter.com/intent/tweet?url=${url}&title=${title}`);
        })

        // LinkedIn
        targetLinkedin.addEventListener('click', event => {
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
        })

        // Reddit
        targetReddit.addEventListener('click', event => {
            window.open(`https://reddit.com/submit?url=${url}&title=${title}`);
        })

        // Email
        targetEmail.addEventListener('click', event => {
            window.open(`mailto:?subject=${title}&body=${url}`);
        })
	}
	InitShare();
})();
