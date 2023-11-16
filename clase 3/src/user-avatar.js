import { LitElement, html, css } from 'lit-element';
import { icons } from './icons';

export class UserAvatar extends LitElement {

    static get styles() {
        return css`
        :host {
            display: inline-block;
        }
        div {
            display: inline-block;
            background-repeat: round;
            background-position: center;
            background-color: #fff;
        }
        `
    }

    static get properties() {
        return {
            src: { type: String },
            size: { type: Number }
        };
    }

    constructor() {
        super();   
        this.alt = '';
        this.size = '50';    
    }

    render() {
        return html`
        ${this.src
            ? html`
            <div
                id="img"
                role="img"
                style="background-image: url('${this._asignImage(this.src)}'); border-radius: ${ this.size + 'px'}; height: ${ this.size + 'px'}; width: ${ this.size + 'px'}; ";
            ></div>`
            : icons.person
        }
        `;
    }

    _asignImage(src){
        if(src=='') {
            return icons.person;
        }
        return '/images/' + src;
    }
}
customElements.define('user-avatar', UserAvatar);