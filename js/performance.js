(function () {
	"use strict";
    let tti = 0;
    let ttc = 0;
    let t = 0;
    document.addEventListener('readystatechange', (event) => {
        t = performance.now();
        let state = event.target.readyState;
        if (state == 'interactive') {
            tti = (t/1000).toPrecision(2);
        } else if (state == 'complete') {
            ttc = (t/1000).toPrecision(2);
            console.log(`⚡This page became interactive in ${tti}s and complete ${ttc}s`);
            document.querySelectorAll('.ttc').forEach(el => {
                el.innerHTML = ttc + 's';
            });
            document.querySelectorAll('.tti').forEach(el => {
                el.innerHTML = tti + 's';
            });
        }
    });
})();
