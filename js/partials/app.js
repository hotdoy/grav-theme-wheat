const App = {
    b: document.body,
    path: window.location.pathname,
    depth: 0,
    delay: 0,
    perceivedDelay: performance.now(),
    events: {
        ready: new Event('appReady'),
        update: new Event('appUpdate'),
        interactive: new Event('appInteractive'),
        complete: new Event('appComplete'),
    },

    getAdjustedDelay: function(delay) {
        if (delay <= 0) {
            return delay;
        } else {
            return delay - this.perceivedDelay;             
        }
    },

    getDepth: function(url) {
        if (url && url.length) {
            return url.split('/').length - 1;
        } else {
            return 0;
        }
    },

    observeMutation: function(selector, callback) {
        const target = document.querySelector(selector);
        const config = { attributes: false, childList: true, subtree: true };
        const observer = new MutationObserver(function() {
            callback();
            observer.disconnect();
        });
        observer.observe(target, config);
        return;
    },

    setState: function(el, state, delay, events) {
        setTimeout(function(){
            el.setAttribute('data-state', state);
            if (events) {
                events.forEach(e => {
                    document.dispatchEvent(e);   
                });
            }
        }, delay);
    },

    Img: {

        Init: function() {
            document.querySelectorAll('img').forEach(el => {
                el.onload = function() {
                    App.setState(el, 'complete');
                    el.removeAttribute('style');
                };
                if (el.complete) {
                    App.setState(el, 'complete');
                    el.removeAttribute('style');
                };
            });
            // App.ObserveMutation('#main', App.Img.Init());
        },
    },


    Init: function() {
        App.depth = App.getDepth(App.path);
        document.addEventListener('readystatechange', e => {
            if (e.target.readyState === 'complete') {
                App.setState(App.b, 'complete', App.getAdjustedDelay(App.delay), [App.events.complete]);
            }
        });

        App.Img.Init();
        document.dispatchEvent(App.events.ready);
        App.setState(App.b, 'interactive', App.getAdjustedDelay(App.delay), [App.events.interactive]);
    }
};

App.Init();


