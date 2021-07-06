const DomState = {
    state: 'loading',
    href: window.location.href,
    hostname: window.location.hostname,
    path: window.location.pathname,
    destination: '',
    currentDepth: '',
    destinationDepth: 0,
    intDelay: 0,
    navDelay: 0,
    fxDelay: 0,
    t: performance.now(),
    events: {
        ready: new Event('domstate-ready'),
        update: new Event('domstate-update'),
        updateAttr: new Event('domstate-update-attr'),
        interactive: new Event('domstate-interactive'),
        fx: new Event('domstate-fx'),
        navigating: new Event('domstate-navigating'),
    },


    Log: function(message) {
        console.log('%c DOMSTATE: ' + message, 'color:green;');
    },

    GetDelay: function(delay) {
        if (delay <= 0) {
            return delay;
        } else {
            return delay - this.t;             
        }
    },

    GetIntDelay: function() {
        return this.GetDelay(this.intDelay);
    },

    GetFxDelay: function() {
        return this.GetDelay(this.FxDelay);
    },

    GetDirection: function() {
        return 0;
    },

    GetDepth: function(url) {
        if (url && url.length) {
            return url.split('/').length - 1;
        } else {
            return 0;
        }
    },

    SetDestinationDepth: function() {
        this.destinationDepth = this.GetDepth(this.destination);
    },

    SetCurrentDepth: function() {
        this.currentDepth = this.GetDepth(this.path);
    },

    UpdateStateAttr: function() {
        document.body.setAttribute('data-domstate', this.state);
    },

    UpdateState: function() {
        this.SetCurrentDepth();

        if (this.state == 'loading') {
            this.state = 'interactive';
            this.t = performance.now();

            document.dispatchEvent(DomState.events.interactive);
            this.Log(this.state + ' - ' + this.t);
            
            setTimeout(function(){
                document.dispatchEvent(DomState.events.updateAttr);
            }, this.GetIntDelay());

            setTimeout(function(){
                document.dispatchEvent(DomState.events.fx);
            }, this.GetFxDelay());

        } else if (this.state == 'interactive') {

            if (this.destinationDepth < this.currentDepth) {
                this.state = 'navigating-backward';
            } else if(this.destinationDepth > this.currentDepth) {
                this.state = 'navigating-forward';   
            } else {
                this.state = 'navigating';   
            }
            this.UpdateStateAttr();
            document.dispatchEvent(this.events.navigating);
            this.Log(this.state);
        }
    },

    Init: function() {
        document.addEventListener('domstate-ready', () => {this.Log('ready');});
        document.addEventListener('domstate-update', () => {this.UpdateState();});
        document.addEventListener('domstate-update-attr', () => {this.UpdateStateAttr();});
        document.dispatchEvent(this.events.ready);
        document.dispatchEvent(this.events.update);
    }
};

DomState.Init();

