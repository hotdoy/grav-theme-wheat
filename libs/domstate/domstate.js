const DomState = {

    // Current active state
    state: 'loading',

    // Current interactive page
    interactive: {
        path: '',
        depth: 0,
        delay: 0,
    },

    // Page navigating to
    navigating: {
        path: '',
        depth: 0,
        delay: 0,
    },

    // Perceived Delay
    perceivedDelay: 0,

    // Events
    events: {
        ready: new Event('domstateReady'),
        update: new Event('domstateUpdate'),
        updateAttr: new Event('domstateUpdateAttr'),
        interactive: new Event('domstateInteractive'),
        navigating: new Event('domstateNavigating'),
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
        document.dispatchEvent(this.events.updateAttr);
    },

    UpdateState: function(state, delay, event) {
    
        if (state == 'interactive') {
            setTimeout(function(){
                DomState.state = state;
                DomState.UpdateStateAttr();
                DomState.Log(DomState.state);
                document.dispatchEvent(DomState.events.interactive);
            }, this.GetAdjustedDelay(this.interactive.delay));
        } else {
            setTimeout(function(){
                DomState.state = state;
                DomState.UpdateStateAttr();
                DomState.Log(DomState.state);
                if (event) {
                     document.dispatchEvent(event);   
                }
            }, delay);
        }
    },

    Init: function() {
        this.perceivedDelay = performance.now();
        this.interactive.path = window.location.pathname;
        this.interactive.depth = this.GetDepth(this.interactive.path);
        document.addEventListener('domstateReady', () => {this.Log('ready');});
        document.dispatchEvent(this.events.ready);
        this.UpdateState('interactive');
    }
};

DomState.Init();
