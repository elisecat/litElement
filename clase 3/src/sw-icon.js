import { LitElement, html, css } from 'lit-element';
import { icons } from './icons';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

export class SwIcon extends LitElement {

    static get properties() {
        return {
            icon: { type: String }
        };
    }

    static get styles() {
        return css`
            :host[hidden] { display: none; }
            :host { display: inline-block; line-height: 0; position: relative; top: 0.5em;}
            path {
                fill: var(--sw-icon-color, #888);
            }
            path[fill="none"]{
                fill: transparent;
            }
            svg {
                width: var(--sw-icon-size, 24px);
                height: var(--sw-icon-size, 24px);
                display: inline-block;
            }
        `
    }

    constructor() {
        super();
        this.icon = 'done';
    
    }

    render() {
        return html`${ unsafeHTML(icons[this.icon]) }`;
    }
}

customElements.define('sw-icon', SwIcon);