document.addEventListener('snipcart.ready', () => {

	Snipcart.events.on('item.added', (cartItem) => {
	    console.log('Item Added!');
	});
	
});


