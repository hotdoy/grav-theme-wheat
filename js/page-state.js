const PageState = {

    state: '0',
    completeDelay: 0,
    fxDelay: 0,
    navigationDelay: 0,
    t: performance.now(),

    Log: function(message) {
        console.log('%c PAGESTATE: ' + message, 'color:green;');
    },

    UpdateState: function(state) {

        switch(PageState.state) {

            // INTERACTIVE
            case '0':
                PageState.t = performance.now();
                PageState.state = '01';

                const adjustedFxDelay = PageState.fxDelay - PageState.t;
                if (adjustedFxDelay <= 0) {
                    FX.Init(); 
                } else {
                    setTimeout(function(){ 
                        FX.Init();
                    }, adjustedFxDelay);                
                }

                PageState.UpdateStateAttr();
                break;

            // COMPLETE
            case '01':
                PageState.state = '012';
                PageState.t = performance.now();
                PageState.UpdateStateAttr(PageState.completeDelay);
                break;

            // NAVIGATING
            case '012':
                PageState.state = '0123';
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

PageState.Log(PageState.state + '\t\t\t' + PageState.t);
document.onreadystatechange = function() {
    PageState.UpdateState(); 
}
