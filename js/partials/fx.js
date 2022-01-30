document.addEventListener('appInteractive', () => {

    ScrollOut({
        targets: ['.module'],
        once: true,
    });

    ScrollOut({
        targets: ['.landing__heading'],
    });

    // MODULE: NUMBERS
    ScrollOut({
        targets: ['.module.numbers .item'],
        // once: true,
    });

    Splitting({
        target: ['.module.numbers .item h3'],
    });

});
