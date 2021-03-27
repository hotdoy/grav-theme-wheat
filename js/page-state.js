const PageState = {

    state: 'loading',
    completeDelay: 0,
    navigationDelay: 0,
    fxDelay: 0,
    t: performance.now(),

    Log: function(message) {
        console.log('%c PAGESTATE: ' + message, 'color:green;');
    },

    UpdateState: function(state) {

        switch(PageState.state) {

            // INTERACTIVE
            case 'loading':
                PageState.t = performance.now();
                PageState.state = 'interactive';
                PageState.UpdateStateAttr();
                break;

            // COMPLETE
            case 'interactive':
                PageState.state = 'complete';
                PageState.t = performance.now();
                const adjustedFxDelay = PageState.fxDelay - PageState.t;
                if (adjustedFxDelay < 0) {
                   FX.Init(); 
                } else {
                    setTimeout(function(){ 
                        FX.Init();
                    }, adjustedFxDelay);                
                }
                PageState.UpdateStateAttr(PageState.completeDelay);
                break;

            // NAVIGATING
            case 'complete':
                PageState.state = 'complete-navigating';
                PageState.UpdateStateAttr();
                break;
        }

        PageState.Log(PageState.state + '\t\t' + PageState.t);
    },

    UpdateStateAttr: function(delay) {
        setTimeout(function(){ 
            document.body.setAttribute('data-page-state', PageState.state);
        }, delay);
    },
};

PageState.state = document.readyState;
PageState.Log(PageState.state + '\t\t\t' + PageState.t);
document.onreadystatechange = function() {
    PageState.UpdateState(); 
}
