document.addEventListener('appInteractive', () => {
    const tti = (performance.now()/1000).toPrecision(2);
    console.log('%c interactive - ' + tti, 'color:green;');
    document.querySelectorAll('.domstate-tti').forEach(el => {
        el.innerHTML = tti + 's';
    });
});

document.addEventListener('appComplete', () => {
    const ttc = (performance.now()/1000).toPrecision(2);
    console.log('%c complete - ' + ttc, 'color:green;');
    document.querySelectorAll('.domstate-ttc').forEach(el => {
        el.innerHTML = ttc + 's';
    });
});
