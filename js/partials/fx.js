document.addEventListener('appInteractive', () => {
    setTimeout(() => {

        // MODULE (DEFAULT)
        ScrollOut({
            targets: ['.module'],
            once: true
        });

        
        // SPLASH
        ScrollOut({
            targets: ['.splash__heading'],
        });


        // NUMBERS
        Splitting({
            target: ['.module.numbers .item h3'],
        });  


        // MEDIATEXT
        Splitting({
            target: '.module.mediatext',
            by: 'items',
            matching: '.content > *'
        });
    
        
    }, App.fxDelay);
});
