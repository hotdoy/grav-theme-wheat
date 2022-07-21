class WhtNetwork extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.interval = setInterval(() => {
			this.update();
		}, 1000);
	}

	disconnectedCallback() {
		clearInterval(this.interval);
	}

	get status() {
		return navigator.onLine ? "online" : "offline";
	}

	get networkType() {
		if ("connection" in navigator) {
			return navigator.connection.effectiveType;
		} else {
			return;
		}
	}

	get statusAttr() {
		return this.getAttribute("status");
	}

	set statusAttr(status) {
		this.setAttribute("status", status);
	}

	update() {
		if (this.status === "offline" && this.statusAttr === "offline") {
			// Nothing, just wait for the next interval.
		} else if (this.status === "offline") {
			this.innerHTML = "💢 Internet connection lost.";
			this.statusAttr = "offline";
		} else if (this.statusAttr === "offline" && this.status === "online") {
			this.innerHTML = "🟢 Internet is back!";
			this.statusAttr = "online";
		}
	}
}
customElements.define("wht-network", WhtNetwork);
