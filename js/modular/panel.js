class WhtPanel extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define('wht-panel', WhtPanel, { extends: 'section' });
