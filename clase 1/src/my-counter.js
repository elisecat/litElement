import { LitElement, html } from 'lit-element';

export class MyCounter extends LitElement {

    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            counter: { type: Number }
        };
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
        this.counter = 0;
    
    }

    render() {
        return html`
        <style>
        div {
            border: 1px solid #ddd;
            padding: 10px;
        }
        .x{
            background-color: red;
            color: #fff;
        }
        </style>
        <div class="x">Llevas ${this.counter} clics!</div>
        <div>
            <button @click="${this.increment}" >+1</button>
            <button @click="${this.decrement}" >-1</button>
        </div>
        <feedback-element id="feedback"></feedback-element>    
        `;
    }

    //creamos un getter
    get feedback(){
        return this.shadowRoot.getElementById('feedback');
    }

    increment(){
        this.counter ++;

        if(this.counter == 5){
            this.feedback.open('Has llegado a 5 clics');
        }
    }

    
    decrement(){
        this.counter --;

        if(this.counter == 0){
            this.feedback.open('Has reseteado los clics');
        }
    }
}
customElements.define('my-counter', MyCounter);