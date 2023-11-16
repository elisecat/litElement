import { html } from 'lit-element'

export const ContentTemplate = function(superClass) {
    return class extends superClass {
        get moreContent() {
            return html`
            <h1>Probando más contenido</h1>
            <p>Un contenido extraaaa</p>
            <p>
                ${this.closed ? 'Estas cerrado' : 'Estas abierto'}
            </p>
            `;
        }
        
    }
}