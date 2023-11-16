import { LitElement, html } from 'lit-element';

export class HolaMundo extends LitElement {

    static get  properties() {
        return {
            quien: { type: String }
        };
    }

    //permite definir lo que sería el template, la parte visual del componente. 
    render() {
        //template string ECMASCRIPT 2015
        return html`
        <p>Hola <b> ${this.quien}</b> </p>
        `;
    }
}

//define el nuevo componente a partir de la clase definida
customElements.define('hola-mundo', HolaMundo);