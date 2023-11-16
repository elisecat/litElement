import { LitElement, html, css } from 'lit-element';
import { SwSwitch } from './sw-switch';
import { FeedbackMixin } from './mixins/feedback-mixin';
import { sharedStyles } from './shared-styles';

export class EitSwitchLabel extends FeedbackMixin(LitElement) {
    static get properties() {
        return {
            checked: { type: Boolean },
            label: { type: String }             
        };
    }

    static get styles() {
        return  [sharedStyles ,css`
        :host {
          display: inline-block;
        }
        div {
          display: flex;
          align-items: center;
        }
        sw-switch {
          margin-right: 6px;
        }
        `]; 
    }

    render() {
        return html`
        <div>
            <sw-switch ?checked="${this.checked}" @click="${this.onClick}"></sw-switch>
            <span @click="${this.onClick}">${this.label}</span>
        </div>
        `;
    }

    onClick() {
      this.checked = !this.checked;
      this.sendFeedback('Cambio el checked');
    }
}
customElements.define('eit-switch-label', EitSwitchLabel);