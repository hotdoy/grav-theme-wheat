const DomState = {

    state: 'loading',

    path: '',
    depth: 0,
    delay: 0,

    perceivedDelay: 0,

    events: {
        ready: new Event('domstateReady'),
        update: new Event('domstateUpdate'),
        updateAttr: new Event('domstateUpdateAttr'),
        interactive: new Event('domstateInteractive'),
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
            }, this.GetAdjustedDelay(this.delay));
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
        this.path = window.location.pathname;
        this.depth = this.GetDepth(this.path);
        document.addEventListener('domstateReady', () => {this.Log('ready');});
        document.dispatchEvent(this.events.ready);
        this.UpdateState('interactive');
    }
};

DomState.Init();
