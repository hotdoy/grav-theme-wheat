const PageState = {

    state: 'loading',
    completeDelay: 0,
    navigationDelay: 0,
    fxDelay: 0,

    Log: function(message) {
        console.log('%c PAGESTATE: ' + message, 'color:green;');
    },

    UpdateState: function(state) {

        switch(PageState.state) {

            // INTERACTIVE
            case 'loading':
                PageState.state = 'interactive';
                PageState.UpdateStateAttr();
                break;

            // COMPLETE
            case 'interactive':
                PageState.state = 'complete';
                setTimeout(function(){ 
                    FX.Init();
                }, PageState.fxDelay);
                PageState.UpdateStateAttr(PageState.completeDelay);
                break;

            // NAVIGATING
            case 'complete':
                PageState.state = 'complete-navigating';
                PageState.UpdateStateAttr();
                break;
        }

        PageState.Log(PageState.state);
    },

    UpdateStateAttr: function(delay) {
        setTimeout(function(){ 
            document.body.setAttribute('data-page-state', PageState.state);
        }, delay);
    },

    Init: function() {
        PageState.UpdateState(); 
    },
};

PageState.state = document.readyState;
PageState.Log(PageState.state);
document.onreadystatechange = function() {
    PageState.UpdateState(); 
}
