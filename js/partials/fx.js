document.addEventListener('domstateInteractive', () => {
    const delay = 0;

    setTimeout(function(){

        ScrollOut({
            targets: ['.module'],
            once: true,
        });

    }, delay);
});
