class WhtNetwork extends HTMLElement {
	constructor() {
		super();
		this.Update();
		setInterval(() => {
			this.Update();
		}, 1000);
	}

	get onlineStatus() {
		return navigator.onLine ? "online" : "offline";
	}

	Update() {
		this.setAttribute("data-network", this.onlineStatus);
	}
}
customElements.define("wht-network", WhtNetwork);
