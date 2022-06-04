class WhtDetails extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define('wht-details', WhtDetails, { extends: 'section' });
