const PageState = {
    state: 'loading',
    interactiveDelay: 0,
    navigationDelay: 200,
    fxDelay: 0,
    t: performance.now(),

    Log: function(message) {
        console.log('%c page-state: ' + PageState.state + ' - ' + PageState.t, 'color:green;');
    },

    GetAdjustDelay: function(delay) {
        if (delay <= 0) {
            return delay;
        } else {
            return delay - PageState.t;             
        }
    },

    UpdateState: function(state) {

        switch(PageState.state) {

            // INTERACTIVE
            case 'loading':
                PageState.state = 'interactive';
                PageState.t = performance.now();
                setTimeout(function(){ 
                    FX.Init();
                }, PageState.GetAdjustDelay(PageState.fxDelay)); 
                PageState.UpdateStateAttr(PageState.GetAdjustDelay(PageState.interactiveDelay));
                break;

            // NAVIGATING
            case 'interactive':
                PageState.state = 'navigating';
                PageState.UpdateStateAttr();
                Dialog.closeAll();
                break;
        }

        PageState.Log();
    },

    UpdateStateAttr: function(delay) {
        setTimeout(function(){ 
            document.body.setAttribute('data-page-state', PageState.state);
        }, delay);
    },
};

PageState.UpdateState(); 
