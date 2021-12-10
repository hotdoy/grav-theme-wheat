document.addEventListener('appInteractive', () => {
    const delay = 0;

    setTimeout(function(){

        ScrollOut({
            targets: ['.module'],
            // once: true,
        });

        ScrollOut({
            targets: ['.landing__heading'],
            // once: true,
        });

    }, delay);
});
