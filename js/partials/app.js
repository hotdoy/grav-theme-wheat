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

    observeMutation: function(selector, callback) {
        const target = App.doc.querySelector(selector);
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
                App.setState(App.body, '_012_nav-b', 0, [App.events.navigating, App.events.navigatingBackward]);

            } else if(App.destinationDepth > App.currentDepth) {
                App.setState(App.body, '_012_nav-f', 0, [App.events.navigating, App.events.navigatingForward]);

            } else {
                App.setState(App.body,'_012_nav', 0, [App.events.navigating]);
            }
            setTimeout(function(){ 
                window.location.href = App.destinatioPath;
            }, App.navigationDelay);

        }, false);
    },

    setPrerenderLink: function() {
        if (App.navigationDelay > 0) {
            const link = App.doc.createElement('link');
            link.href = App.destinatioPath;
            link.rel='prerender';
            App.doc.getElementsByTagName('head')[0].appendChild(link);    
        } 
    },

    setLinkBehaviour: function(els) {
        els.forEach(el => {
            const url = el.getAttribute('href');
            const targetAttr = el.getAttribute('target');
            if (!!url) {
                if (!!targetAttr) {
                    return;
                }
                else if (url.match("^http") || url.match("^mailto:") || url.match("^tel:")) {
                    App.setExtLinkBehaviour(el);
                } 
                else if (url.match("^/")) {
                    App.setIntLinkBehaviour(el);
                }                
            }
        });
    },

    setImgBehaviour: function(els) {
        els.forEach(el => {
            el.onload = function() {
                App.setState(el, '1');
                el.removeAttribute('style');
            };
            if (el.complete) {
                App.setState(el, '1');
                el.removeAttribute('style');
            };
        });
    },

    Init: function() {
        App.setCurrentDepth();
        App.setLinkBehaviour(App.doc.querySelectorAll("a"));
        App.setImgBehaviour(App.doc.querySelectorAll('img'));
        App.setAdjustedDelay();
        if (App.tti == null) {
            App.tti = performance.now();
        }
        App.setState(App.body, '_01', App.interactiveAdjustedDelay, [App.events.interactive]);
        App.setCompleteListener();
    }
};

App.Init();
