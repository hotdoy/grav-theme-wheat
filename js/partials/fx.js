document.addEventListener('appInteractive', () => {

    // LANDING
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


    // EMPHASIS
    ScrollOut({
        targets: '.module.emphasis',
    });
    Splitting({
        target: ['.module.emphasis p'],
        by: ['lines'],
    });


    // MEDIATEXT
    ScrollOut({
        targets: '.module.mediatext .content',
    });
    Splitting({
        target: '.module.mediatext',
        by: 'items',
        matching: '.content > *'
    });
    
    // FEATURES
    ScrollOut({
        targets: '.module.features .item',
    });
    Splitting({
        target: '.module.features .item',
        by: 'items',
        matching: '.item > *'
    });

});
