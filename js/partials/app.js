const App = {
    win: window,
    doc: document,
    body: document.body,
    currentPath: window.location.pathname,
    currentDepth: 0,
    destinatioPath: '',
    destinationDepth: 0,
    interactiveDelay: 0,
    completeDelay: 0,
    fxDelay: 0,
    navigationDelay: 0,
    perceivedDelay: performance.now(),
    interactiveAdjustedDelay: 0,
    completeAdjustedDelay: 0,
    tti: null,
    ttc: null,
    events: {
        interactive: new Event('appInteractive'),
        complete: new Event('appComplete'),
        navigating: new Event('appNavigating'),
        navigatingForward: new Event('appNavigatingForward'),
        navigatingBackward: new Event('appNavigatingBackward'),
        persisting: new Event('appPersisting'),
    },

    setState: function(el, state, delay, events) {
        setTimeout(function(){
            el.setAttribute('data-state', state);
            if (events) {
                events.forEach(e => {
                    App.doc.dispatchEvent(e);   
                });
            }
        }, delay);
    },

    getAdjustedDelay: function(delay) {
        if (delay <= 0) {
            return delay;
        } else {
            return delay - this.perceivedDelay;             
        }
    },

    getDepth: function(path) {
        if (path && path.length) {
            return path.split('/').length - 1;
        } else {
            return 0;
        }
    },

    setCurrentDepth: function(depth) {
        if (depth) {
            App.currentDepth = depth;
        } else {
            App.currentDepth = App.getDepth(App.currentPath);
        }
    },

    setDestinationPath: function(path) {
        if (path.length) {
            App.destinatioPath = path;  
        }
    },

    setDestinationDepth: function(depth) {
        if (depth) {
            App.destinationDepth = depth;
        } else {
            App.destinationDepth = App.getDepth(App.destinatioPath);
        }
    },

    setAdjustedDelay: function() {
        App.interactiveAdjustedDelay = App.getAdjustedDelay(App.interactiveDelay);
        App.completeAdjustedDelay = App.getAdjustedDelay(App.completeDelay);
    },

    setCompleteListener: function() {
        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                App.setState(App.body, '_012', App.completeAdjustedDelay, [App.events.persisting]);
            }
        });
        if (App.doc.readyState === 'complete') {
            App.ttc = performance.now();
            App.setState(App.body, '_012', App.completeAdjustedDelay, [App.events.complete]);
        } else {
            App.doc.addEventListener('readystatechange', e => {
                if (e.target.readyState === 'complete') {
                    App.ttc = performance.now();
                    App.setState(App.body, '_012', App.completeAdjustedDelay, [App.events.complete]);
                }
            });
        }
    },

    Init: function() {
        App.setAdjustedDelay();
        if (App.tti == null) {
            App.tti = performance.now();
        }
        App.setState(App.body, '_01', App.interactiveAdjustedDelay, [App.events.interactive]);
        App.setCompleteListener();
    }
};

App.Init();
