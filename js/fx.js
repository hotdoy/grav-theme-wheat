const FX = {

    Default: function() {
        ScrollOut({
            targets: ['.fx', '.module'],
            once: true,
        });
    },

    Init: function() {
        FX.Default(); 
    },
};
