import { LitElement, html } from 'lit-element';

export class TodoList extends LitElement {

    static get properties() {
        return {
            items: { type: Array }
        };
    }

    constructor() {
        super();
        this.items = [
            {
                name: 'tarea 1',
                completed: false
            },
            {
                name: 'tarea 2',
                completed: false
            },
            {
                name: 'tarea 3',
                completed: true
            }
        ]
    }

    render() {
        return html`
        ${
            this.items.map( item => html`<todo-item @sw-switch-checked="${this.newChecked}" .task=${item}></todo-item>`)
        }
        `;
    }

    newChecked(e){
        console.log('estoy en el listado', e);
    }
}
customElements.define('todo-list', TodoList);