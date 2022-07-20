document.addEventListener("appInteractive", () => {
	const tti = (App.tti / 1000).toPrecision(2);
	console.log("%c interactive - " + tti, "color:green;");
	document.querySelectorAll(".app-tti").forEach((el) => {
		el.innerHTML = tti + "s";
	});
});

document.addEventListener("appComplete", () => {
	const ttc = (App.ttc / 1000).toPrecision(2);
	console.log("%c complete - " + ttc, "color:green;");
	document.querySelectorAll(".app-ttc").forEach((el) => {
		el.innerHTML = ttc + "s";
	});
});
