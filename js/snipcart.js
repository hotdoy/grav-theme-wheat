document.addEventListener("snipcart.ready", () => {
	Snipcart.events.on("item.added", (cartItem) => {
		console.log("Item added!");
	});

	Snipcart.events.on("customer.signedin", (customer) => {
		Dialog.openByHash("dialog-signin", 1000);
	});

	Snipcart.events.on("customer.signedout", () => {
		window.location.hash = "";
		Dialog.openByHash("dialog-signout", 1000);
	});

	// Snipcart.events.on('snipcart.initialized', (snipcartState) => {
	//     console.log('Snipcart Initialized');
	// });
});
