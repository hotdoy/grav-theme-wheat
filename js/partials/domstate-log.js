document.addEventListener('domstateComplete', () => {

    const ttc = (performance.now()/1000).toPrecision(2);
    console.log(ttc + 's');
    document.querySelectorAll('.timeto-complete').forEach(el => {
        el.innerHTML = ttc + 's';
    });

});
