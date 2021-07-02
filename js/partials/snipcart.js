document.addEventListener("snipcart.ready", () => {

    Snipcart.events.on("item.added", (cartItem) => {
        console.log('Item added!')
        window.navigator.vibrate(10);
        document.querySelectorAll(".snipcart-pulse").forEach( pulse => {
            pulse.addEventListener("animationend", () => {
                pulse.classList.remove("pulse");
            });
            pulse.classList.add("pulse");
        });
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
