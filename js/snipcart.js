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
        console.log(`Customer ${customer.email} just signed in.`);

        setTimeout(function() {
            window.location.hash = 'dialog-welcomeback';
        }, 1000);

    });

    Snipcart.events.on('customer.signedout', () => {
        console.log('Customer signed out');
    });

    Snipcart.events.on('snipcart.initialized', (snipcartState) => {
        console.log(snipcartState);
    });

});
