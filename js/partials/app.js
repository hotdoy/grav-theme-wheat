const App = {
    b: document.body,
    path: window.location.pathname,
    depth: 0,
    dest: '',
    destDepth: '',
    delay: 0,
    navDelay: 0,
    perceivedDelay: performance.now(),
    adjustedDelay: 0,
    events: {
        ready: new Event('appReady'),
        update: new Event('appUpdate'),
        interactive: new Event('appInteractive'),
        complete: new Event('appComplete'),
        navigating: new Event('appNavigating'),
        navigatingForward: new Event('appNavigatingForward'),
        navigatingBackward: new Event('appNavigatingBackward'),
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

    setExtLinkAttr: function(el) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
    },

    navigation: function() {
        document.querySelectorAll("a").forEach(el => {

            const href = el.getAttribute("href");
            
            if (!!href && href.match("^http")) {
                App.setExtLinkAttr(el);
            } else if (!!href && href.match("^/")) {
                el.addEventListener("click", function(e) {
                    e.preventDefault();

                    App.dest = href;                    
                    App.destDepth = App.getDepth(App.dest);

                    // Add link prerender
                    if (App.navDelay > 0) {
                        const prefetch = document.createElement('link');
                        prefetch.href = App.path;
                        prefetch.rel='prerender';
                        document.getElementsByTagName('head')[0].appendChild(prefetch);                        
                    }

                    // Trigger navigation event
                    if (App.destDepth < App.depth) {
                        App.setState(App.b, 'navigating-backward', 0, [App.events.navigating, App.events.navigatingBackward]);
                    } else if(App.depth > App.depth) {
                        App.setState('navigating-forward', 0, [App.events.navigating, App.events.navigatingForward]);
                    } else {
                        App.setState(App.b, 'navigating', 0, [App.events.navigating]);
                    }

                    // Navigate
                    setTimeout(function(){ 
                        window.location.href = App.path;
                    }, App.delay);

                }, false);
            }
        });
    },







    Init: function() {
        App.depth = App.getDepth(App.path);
        App.adjustedDelay = App.getAdjustedDelay(App.delay);
        document.addEventListener('readystatechange', e => {
            if (e.target.readyState === 'complete') {
                App.setState(App.b, 'complete', App.adjustedDelay, [App.events.complete]);
            }
        });

        App.navigation();

        // IMG
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

        document.dispatchEvent(App.events.ready);
        App.setState(App.b, 'interactive', App.adjustedDelay, [App.events.interactive]);
    }
};

App.Init();


