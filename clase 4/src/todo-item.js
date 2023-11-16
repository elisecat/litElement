import { LitElement, html, css } from 'lit-element';

export class TodoItem extends LitElement {

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            task: { type: Object}
        };
    }

    static get styles() {
        return css`
        p {
            display: flex;
            align-items: center;
        }
        sw-switch {
            margin-right: 10px;
        }
        .completed {
            text-decoration: line-through;
            color: green;
        }
        `
    }

    render() {
        return html`
        <p class="${this.task.completed ? 'completed': ''}">
           <sw-switch ?checked="${this.task.completed}" @sw-switch-checked="${this.checkedChanged}"></sw-switch> ${ this.task.name }
        </p>
        `;
    }

    checkedChanged(e){
        console.log('checked', e);
        this.task = { 
            name: this.task.name,
            completed: e.detail
        }
    }

}
customElements.define('todo-item', TodoItem);