document.addEventListener('domstateInteractive', () => {
    
    const delay = 0;

    DomState.Log('fx');
    setTimeout(function(){
        ScrollOut({
            targets: ['.module'],
            once: true,
        });
    }, delay);

});
