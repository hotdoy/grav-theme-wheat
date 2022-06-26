(function () {
	"use strict";
    let tti = 0;
    let ttc = 0;
    let t = 0;
    let TransferedBytes = 0;
    let co2 = 0;
    const kwhPerGb = 0.81;
    const carbonFactor = 50; //50 for renewable | 442 for bog standard

    function updateCo2() {
        const transferInGb = bToGb(TransferedBytes);
        const kwhPerVisit = transferInGb * kwhPerGb;
        const co2PerVisit = (kwhPerVisit * carbonFactor);
        co2 = co2 + co2PerVisit;
    };

    function updateTransferedBytes() {
        let b = 0;
        performance.getEntriesByType('resource').forEach(r => {
            b = b + r['transferSize'];
        });
        TransferedBytes = b;
    };

    function bToKb(b) {
        return b / 1024;
    }

    function bToGb(b) {
        return b / 1e+9;
    }

    function logPerformance(logToconsole, logTodom) {
        if (logToconsole) {
            console.log(`⚡This site became interactive in ${tti}s and complete in ${ttc}s`);
        }
        if (logTodom) {
            document.querySelectorAll('.ttc').forEach(el => {
                el.innerHTML = ttc + 's';
            });
            document.querySelectorAll('.tti').forEach(el => {
                el.innerHTML = tti + 's';
            });  
        }
    };

    function logCo2(logToconsole, logTodom) {
        if (logToconsole) {
            console.log(`🌲The initial load transfered around ${bToKb(TransferedBytes).toPrecision(5)} KB for an estimate of ${co2.toPrecision(2)}g/CO2.`);
        }
        if (logTodom) {
            document.querySelectorAll('.co2').forEach(el => {
                el.innerHTML = co2PerVisit + 'g/CO2';
            });
        }
    };

    document.addEventListener('readystatechange', (event) => {
        t = performance.now();
        if (event.target.readyState == 'interactive') {
            tti = (t/1000).toPrecision(2);
        } else if (event.target.readyState == 'complete') {
            ttc = (t/1000).toPrecision(2);
            updateTransferedBytes();
            updateCo2();
            logPerformance(true, true);
            logCo2(true, true);
        }
    });

    document.addEventListener('htmx:load', (event) => {
        logPerformance(false, true);
    })
})();
