const PageState = {
    state: 'L',
    Idelay: 0,
    Cdelay: 0,
    Ndelay: 0,
    fxDelay: 0,
    t: performance.now(),

    Log: function(message) {
        console.log('%c PAGESTATE: ' + PageState.state + '\t\t' + PageState.t, 'color:green;');
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
            case 'L':
                PageState.state = 'LI';
                PageState.t = performance.now();
                setTimeout(function(){ 
                    FX.Init();
                }, PageState.GetAdjustDelay(PageState.fxDelay)); 
                PageState.UpdateStateAttr();
                break;

            // COMPLETE
            case 'LI':
                PageState.state = 'LIC';
                PageState.t = performance.now();
                PageState.UpdateStateAttr(PageState.Cdelay);
                break;

            // NAVIGATING
            case 'LIC':
                PageState.state = 'LICN';
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

PageState.Log();
document.onreadystatechange = function() {
    PageState.UpdateState(); 
}
