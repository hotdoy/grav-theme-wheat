(function () {
	"use strict";
    let tti = 0;
    let ttc = 0;
    let t = 0;
    let TransferedBytes = 0;
    let co2 = 0;
    //https://www.cmswire.com/digital-experience/calculating-the-pollution-effect-of-data/
    const kwhPerGb = 0.015; 
    const co2PerKwh = 0.28
    const co2PerGb = kwhPerGb * co2PerKwh;
    function updateCo2() {
        const transferInGb = bToGb(TransferedBytes);
        const co2PerVisit = (transferInGb * co2PerGb)*1000;
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
            console.log(`🌲The initial load transfered around ${bToKb(TransferedBytes).toPrecision(5)} KB for an estimate of ${co2.toPrecision(2)}g/CO2.`);
        }
        if (logTodom) {
            document.querySelectorAll('.ttc').forEach(el => {
                el.innerHTML = ttc + 's';
            });
            document.querySelectorAll('.tti').forEach(el => {
                el.innerHTML = tti + 's';
            });
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
        }
    });

    window.addEventListener('load', (event) => {
        updateTransferedBytes();
        updateCo2();
        logPerformance(true, true);
      });

    document.addEventListener('htmx:load', (event) => {
        logPerformance(false, true);
    })
})();
