const PageState = {
    state: 'loading',
    href: window.location.href,
    hostname: window.location.hostname,
    path: window.location.pathname,
    destination: '',
    currentDepth: '',
    destinationDepth: 0,
    intDelay: 0,
    navDelay: 200,
    fxDelay: 0,
    t: performance.now(),

    Log: function(message) {
        console.log('%c' + this.state + ' @ ' + this.t, 'color:green;');
    },

    GetDelay: function(delay) {
        if (delay <= 0) {
            return delay;
        } else {
            return delay - this.t;             
        }
    },

    GetInteractiveDelay: function() {
        return this.GetDelay(this.intDelay);
    },

    GetFxDelay: function() {
        return this.GetDelay(this.FxDelay);
    },

    GetDirection: function() {},

    GetDepth: function(url) {
        if (url.length) {
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
        document.body.setAttribute('data-page-state', this.state);
    },

    UpdateState: function() {

        this.SetCurrentDepth();

        switch(this.state) {

            // INTERACTIVE
            case 'loading':
                this.state = 'interactive';
                this.t = performance.now();

                setTimeout(function(){ 
                    FX.Init();
                }, this.GetFxDelay());
                
                setTimeout(function(){ 
                    PageState.UpdateStateAttr();
                }, this.GetInteractiveDelay());

                break;

            // NAVIGATING
            case 'interactive':
                if (this.destinationDepth < this.currentDepth) {
                    this.state = 'navigating-backward';
                } else if(this.destinationDepth > this.currentDepth) {
                    this.state = 'navigating-forward';   
                } else {
                    this.state = 'navigating';   
                }
                Dialog.closeAll();
                this.UpdateStateAttr();
                break;
        }

        this.Log();
    },

};

PageState.UpdateState(); 
