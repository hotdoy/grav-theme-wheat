(function () {
	"use strict";
    let T = 0;
    let B = 0; //Bytes
    let E = 0; //Energy
    let C = 0; //Carbon
    let tti = 0; //Time to interactive
    let ttc = 0; //Time to complete

    function getCo2() {
        performance.getEntriesByType('resource').forEach(r => {
            B = B + r['transferSize'];
        });
        E = ((B / 1e+9) * 0.81) + ((B / 1e+9) * 0.81 * 0.25 * 0.02); // Energy
        C = E * 108; // co2 (442 gor bog standard, 50 for renewables, TOR is around 108)
    };

    function bToKb(b) {
        return b / 1024;
    }

    function logPerformance(logToconsole, logTodom) {
        if (logToconsole) {
            console.log(`⚡This site became interactive in ${tti}s and complete in ${ttc}s`);
            console.log(`🌲The initial load transfered around ${(B/1024).toPrecision(5)} KB for an estimate of ${C.toPrecision(2)}g of CO2.`);
        }
        if (logTodom) {
            document.querySelectorAll('.ttc').forEach(el => {
                el.innerHTML = ttc + 's';
            });
            document.querySelectorAll('.tti').forEach(el => {
                el.innerHTML = tti + 's';
            });
            document.querySelectorAll('.co2').forEach(el => {
                el.innerHTML = C + 'g/CO2';
            });  
        }
    };

    document.addEventListener('readystatechange', (event) => {
        T = performance.now();
        if (event.target.readyState == 'interactive') {
            tti = (T/1000).toPrecision(2);
        } else if (event.target.readyState == 'complete') {
            ttc = (T/1000).toPrecision(2);
        }
    });

    window.addEventListener('load', (event) => {
        setTimeout(() => {
            getCo2();
            logPerformance(true, true);
        }, 500)
      });

    document.addEventListener('htmx:load', (event) => {
        logPerformance(false, true);
    })
})();
