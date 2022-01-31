document.addEventListener('appInteractive', () => {

    // MODULE
    ScrollOut({
        targets: ['.module'],
        once: true,
    });


    // LANDING
    ScrollOut({
        targets: ['.landing__heading'],
    });


    // NUMBERS
    ScrollOut({
        targets: ['.module.numbers .item'],
        once: true,
    });
    Splitting({
        target: ['.module.numbers .item h3'],
    });


    // EMPHASIS
    Splitting({
        target: ['.module.emphasis p'],
        by: ['lines'],
    });


    // MEDIATEXT
    Splitting({
        target: '.module.mediatext',
        by: 'items',
        matching: '.content > *'
    });

    
    // FEATURES
    ScrollOut({
        targets: '.module.features .item',
        once: true,
    });
    Splitting({
        target: '.module.features .item',
        by: 'items',
        matching: '.item > *'
    });

});
