document.addEventListener('appInteractive', () => {

    // DEFAULT
    ScrollOut({
        targets: ['.module'],
        // once: true,
    });

    ScrollOut({
        targets: ['.landing__heading'],
    });

    // NUMBERS
    ScrollOut({
        targets: ['.module.numbers .item'],
    });

    Splitting({
        target: ['.module.numbers .item h3'],
    });

    Splitting({
        target: ['.module.emphasis p'],
        by: ['lines'],
    });

});
