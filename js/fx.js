const FX = {

    Module: function() {
        ScrollOut({
            targets: '.module',
            once: true,
        });
    },

    Marquee: function() {
        ScrollOut({
            targets: '.module .marquee',
            cssProps: {
                viewportY: true,
                visibleY: true
            }
        });
    },

    Init: function() {
        FX.Module(); 
        FX.Marquee(); 
    },
};
