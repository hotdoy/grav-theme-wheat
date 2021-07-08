const DomState = {

    state: 'loading',

    path: window.location.pathname,
    depth: 0,
    delay: 0,

    perceivedDelay: performance.now(),

    events: {
        ready: new Event('domstateReady'),
        update: new Event('domstateUpdate'),
        interactive: new Event('domstateInteractive'),
        complete: new Event('domstateComplete'),
    },

    Log: function(message) {
        console.log('%c DOMSTATE: ' + message, 'color:green;');
    },

    GetAdjustedDelay: function(delay) {
        if (delay <= 0) {
            return delay;
        } else {
            return delay - this.perceivedDelay;             
        }
    },

    GetDepth: function(url) {
        if (url && url.length) {
            return url.split('/').length - 1;
        } else {
            return 0;
        }
    },

    UpdateStateAttr: function() {
        document.body.setAttribute('data-domstate', this.state);
    },

    UpdateState: function(state, delay, events) {
        setTimeout(function(){
            DomState.state = state;
            DomState.UpdateStateAttr();
            if (events) {
                events.forEach(e => {
                    document.dispatchEvent(e);   
                });
            }
            DomState.Log(DomState.state);
        }, delay);
    },

    Init: function() {
        this.perceivedDelay = performance.now();
        this.depth = this.GetDepth(this.path);
        document.addEventListener('domstateReady', () => {this.Log('ready');});

        document.addEventListener('readystatechange', e => {
            if (e.target.readyState === 'complete') {
                this.UpdateState('complete', this.GetAdjustedDelay(this.delay), [this.events.complete]);
            }
        });
        document.dispatchEvent(this.events.ready);
        this.UpdateState('interactive', this.GetAdjustedDelay(this.delay), [this.events.interactive]);
    }
};

DomState.Init();
