import { LitElement, html } from 'lit-element';

export class UpdateTest extends LitElement {

    static get properties() {
        return {
            name: {
                type: String,
                hasChanged(newVal, oldVal) {
                    console.log('hasChanged', newVal, oldVal);
                    if(newVal > oldVal){
                        return true;
                    }
                    return false;
                }
            }            
        };
    }

    render() {
        return html`
        <sw-input
            id="elinput"
            .value="${this.name}"
            label="Nombre"
        >
        </sw-input>
        <p>
            <button @click="${this.nameChange}">Cambiar el nombre</button>
        </p>
        `;
    }

    get elinputAlternativo() {
        // Se ejecuta cada vez que se llame
        return this.shadowRoot.getElementById('elinput');
    }

    firstUpdated() {
        // Se ejecuta una unica vez, se 'cachea'.
        this.elinput = this.shadowRoot.getElementById('elinput');
    }

    nameChange(){
        this.name = Math.random();
        // es una promesa que cada vez que el componente se repinta, se resuelve la promesa. 
        this.updateComplete.then(() => {
            console.log('nuevo dato ?? ', this.elinput.value)
        })
        // this.name = Math.random().toString();
    }
}
customElements.define('update-test', UpdateTest);