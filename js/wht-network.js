class WhtNetwork extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = "<div class='online'>🙌 You are back online!</div><div class='offline'>💢 Looks like you are offline.</div>";
		this.Update();
		setInterval(() => {
			this.Update();
		}, 1000);
	}

	connectedCallback() {
		this.innerHTML = "<div class='online'>🙌 You are back online!</div><div class='offline'>💢 Looks like you are offline.</div>";
	}

	get onlineStatus() {
		return navigator.onLine ? "online" : "offline";
	}

	Update() {
		this.setAttribute("data-network", this.onlineStatus);
	}
}
customElements.define("wht-network", WhtNetwork);
