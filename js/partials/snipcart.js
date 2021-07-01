document.addEventListener("snipcart.ready", () => {

    Snipcart.events.on("item.added", (cartItem) => {
        window.navigator.vibrate(10);
        let snipcartPulses = document.getElementsByClassName("snipcart-pulse");

        for (let snipcartPulse of snipcartPulses) {
            snipcartPulse.classList.add("active");
            snipcartPulse.addEventListener("animationend", () => {
                snipcartPulse.classList.remove("active");
            });
        }
        return;
    });

    Snipcart.events.on('customer.signedin', (customer) => {
        Dialog.openByHash('dialog-signin', 1000);
    });

    Snipcart.events.on('customer.signedout', () => {
        window.location.hash = '';
        Dialog.openByHash('dialog-signout', 1000);
    });

    // Snipcart.events.on('snipcart.initialized', (snipcartState) => {
    //     console.log('Snipcart Initialized');
    // });

});
