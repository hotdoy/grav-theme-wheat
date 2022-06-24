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

            // TIME TO COMPLETE
            ttc = (t/1000).toPrecision(2);
            console.log(`⚡This site became interactive in ${tti}s and complete in ${ttc}s`);

            // TRANFER
            let transferInB = 0;
            const rs = performance.getEntriesByType('resource');
            rs.forEach(r => {
                transferInB = transferInB + r['transferSize'];
            });

            // CO2 MATHS
            const transferInKb = transferInB / 1000;
            const transferInGb = (transferInB / 1e+9);
            const kwhPerGb = 0.81;
            const carbonFactor = 50; // 442 for bog standard | 50 for renewable
            const kwhPerVisit = transferInGb * kwhPerGb;
            const co2PerVisit = kwhPerVisit * carbonFactor;
            console.log(`🌲Transfered around ${transferInKb.toPrecision(5)} KB in ${rs.length} requests for an estimate of ${co2PerVisit.toPrecision(2)}g of CO2.`);
           
            // FRONT-END
            document.querySelectorAll('.ttc').forEach(el => {
                el.innerHTML = ttc + 's';
            });
            document.querySelectorAll('.tti').forEach(el => {
                el.innerHTML = tti + 's';
            });
        }
    });
    htmx.onLoad(function(){
        document.querySelectorAll('.ttc').forEach(el => {
            el.innerHTML = ttc + 's';
        });
        document.querySelectorAll('.tti').forEach(el => {
            el.innerHTML = tti + 's';
        });
    });
})();
