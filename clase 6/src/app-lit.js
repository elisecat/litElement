import { LitElement, html } from 'lit-element';
import './feedback-element';
import 'cat-social-icon';

export class AppLit extends LitElement {

    constructor() {
        super();
        //aplicar un manejador de eventos a todo lo que hay dentro del componente 
        this.addEventListener('feedback-message', (e) => {
            this.shadowRoot.getElementById('fe').open(e.detail);
        });
    
    }

    render() {
        return html`
        <style>
            :host {
                --cat-social-icon-color: green;
            }
        </style>
        <slot></slot>
        <feedback-element id="fe"></feedback-element>
        <p>
        <cat-social-icon icon="linkedin"></cat-social-icon>
        </p>
        `;
    }
}
customElements.define('app-lit', AppLit);