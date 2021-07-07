document.addEventListener('domstateInteractive', () => {
    const delay = 0;
    setTimeout(function(){
        DomState.Log('fx');


        ScrollOut({
            targets: ['.module'],
            once: true,
        });

        Splitting({
            target: "h1",
          });




    }, delay);

});
