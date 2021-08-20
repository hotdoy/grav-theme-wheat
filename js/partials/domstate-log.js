document.addEventListener('domstateComplete', () => {

    const ttc = (performance.now()/1000).toPrecision(2);
    document.querySelectorAll('.timeto-complete').forEach(el => {
        el.innerHTML = ttc + 's';
    });

});
