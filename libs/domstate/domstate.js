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
            setTimeout(function(){ FX.Init();}, this.GetFxDelay());
            setTimeout(function(){ DomState.UpdateStateAttr();}, this.GetIntDelay());
        } else if (this.state == 'interactive') {

            if (this.destinationDepth < this.currentDepth) {
                this.state = 'navigating-backward';
            } else if(this.destinationDepth > this.currentDepth) {
                this.state = 'navigating-forward';   
            } else {
                this.state = 'navigating';   
            }

            Dialog.closeAll();
            this.UpdateStateAttr();
        }
        this.Log(this.state + ' - ' + this.t);
    },

};

DomState.UpdateState(); 
