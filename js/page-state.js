const PageState = {

    state: 'loading',
    protocol: location.protocol,
    hostname: window.location.hostname,
    href: window.location.href,
    destination: window.location.href,

    TrackDestination: function() {
        const links = document.querySelectorAll("a");
        for (let link of links) {
            link.addEventListener('click', function(event) {
                PageState.destination = link.getAttribute("href");
            });
        }
    },

    TrackBeforeUnload: function() {
        window.addEventListener('beforeunload', function(event) {
            if (PageState.destination.match('^/') || PageState.destination.includes(PageState.hostname)) {
                PageState.UpdateState('complete-navigating');
            } else {
                PageState.UpdateState('complete-exiting');
            }
        });
    },

    UpdateState: function(state) {
        PageState.state = state;
        PageState.UpdateStateAttr();
        console.log('%c PAGESTATE: ' + PageState.state, 'color:green;');
    },

    UpdateStateAttr: function() {
        document.body.setAttribute('data-page-state', PageState.state);
    },

    Init: function() {
        PageState.UpdateStateAttr();
        PageState.UpdateState('complete');
        PageState.TrackDestination();
        PageState.TrackBeforeUnload();
        ScrollOut({
            cssProps: {
                viewportY: true,
                visibleY: true
            }   
        });
    },

};