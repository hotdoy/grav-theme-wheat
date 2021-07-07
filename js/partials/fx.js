document.addEventListener('domstateInteractive', () => {
    const delay = 0;
    setTimeout(function(){
        DomState.Log('fx');


        ScrollOut({
            targets: ['.module'],
            once: true,
        });

        // Splitting({
        //     target: ".default__header h1",
        //   });




    }, delay);

});
