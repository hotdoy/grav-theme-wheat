class WhtNetwork extends HTMLElement {
	constructor() {
		super();
		setInterval(() => {
			this.Update();
		}, 1000);
	}

	get OnlineStatus() {
		return navigator.onLine ? "online" : "offline";
	}

	Update() {
		if (this.OnlineStatus == "offline" && this.getAttribute("condition") === "offline") {
			// Nothing, just wait for the next interval.
		} else if (this.OnlineStatus == "offline") {
			this.innerHTML = "💢 Internet connection lost.";
			this.setAttribute("condition", "offline");	
		}  else if (this.getAttribute("condition") === "offline" && this.OnlineStatus === "online") {
			this.innerHTML = "🟢 Internet is back!";
			this.setAttribute("condition", "online");
		}
	}
}
customElements.define("wht-network", WhtNetwork);
