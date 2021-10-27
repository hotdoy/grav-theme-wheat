const App = {
    b: document.body,
    currentPath: window.location.pathname,
    currentDepth: 0,
    destinatioPath: '',
    destinationDepth: 0,
    delay: 0,
    navigationDelay: 0,
    perceivedDelay: performance.now(),
    adjustedDelay: 0,
    events: {
        // update: new Event('appUpdate'),
        interactive: new Event('appInteractive'),
        complete: new Event('appComplete'),
        navigating: new Event('appNavigating'),
        navigatingForward: new Event('appNavigatingForward'),
        navigatingBackward: new Event('appNavigatingBackward'),
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
        App.adjustedDelay = App.getAdjustedDelay(App.delay);
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

    setExtLinkBehaviour: function(el) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
    },

    setIntLinkBehaviour: function(el) {
        el.addEventListener("click", function(e) {
            e.preventDefault();
            const destinationPath = el.getAttribute("href");
            App.setDestinationPath(destinationPath);
            App.setDestinationDepth()         
            App.setPrerenderLink(); 

            if (App.destinationDepth < App.currentDepth) {
                App.setState(App.b, 'navigating-backward', 0, [App.events.navigating, App.events.navigatingBackward]);

            } else if(App.destinationDepth > App.currentDepth) {
                App.setState(App.b, 'navigating-forward', 0, [App.events.navigating, App.events.navigatingForward]);

            } else {
                App.setState(App.b,'navigating', 0, [App.events.navigating]);
            }
            setTimeout(function(){ 
                window.location.href = App.destinatioPath;
            }, App.navigationDelay);

        }, false);
    },

    setPrerenderLink: function() {
        if (App.navigationDelay > 0) {
            const link = document.createElement('link');
            link.href = App.destinatioPath;
            link.rel='prerender';
            document.getElementsByTagName('head')[0].appendChild(link);    
        } 
    },

    setLinkBehaviour: function(els) {
        els.forEach(el => {
            const url = el.getAttribute("href");
            if (!!url && url.match("^http")) {
                App.setExtLinkBehaviour(el);
            } 
            if (!!url && url.match("^/")) {
                App.setIntLinkBehaviour(el);
            }
        });
    },

    setImgBehaviour: function(els) {
        els.forEach(el => {
            el.onload = function() {
                App.setState(el, 'complete');
                // el.removeAttribute('style');
            };
            if (el.complete) {
                App.setState(el, 'complete');
                // el.removeAttribute('style');
            };
        });
    },

    Init: function() {
        App.setCurrentDepth();
        App.setAdjustedDelay();
        App.setLinkBehaviour(document.querySelectorAll("a"));
        App.setImgBehaviour(document.querySelectorAll('img'));

        document.addEventListener('readystatechange', e => {
            if (e.target.readyState === 'complete') {
                App.setState(App.b, 'complete', App.adjustedDelay, [App.events.complete]);
            }
        });

        App.setState(App.b, 'interactive', App.adjustedDelay, [App.events.interactive]);
    }
};

App.Init();
