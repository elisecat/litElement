import { LitElement, html, css } from 'lit-element';
import { TagList } from './tag-list';
import { MenuOverlay } from './menu-overlay';

export class TestElement extends LitElement {

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            etiquetas: { type: Array }
        };
    }

    static get styles() {
        return css`
        `
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
    
        this.etiquetas = [1, 2, 3, 4, 5, 'eeeee']
    
    }

    render() {
        return html`
        <p>Estas son las etiquetas<tag-list .tags="${this.etiquetas}"></tag-list></p>

        <menu-overlay id="menu1">
            <p> kualquier kosa</p>
            <button @click="${this.cerrar}">cerrar</button>
            <div slot="trigger">Menú</div>
            <button>cerrar</button>
            <button>guardar</button>
        </menu-overlay>

        `;
    }

    cerrar(){
        this.shadowRoot.getElementById('menu1').close();
    }
}
customElements.define('test-element', TestElement);