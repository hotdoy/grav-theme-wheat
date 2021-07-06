document.addEventListener('domstate-fx', () => {
    DomState.Log('fx');

    ScrollOut({
        targets: ['.module'],
        once: true,
    });
});
