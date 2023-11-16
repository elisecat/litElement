export const FeedbackMixin = function(superClass) {
    return class extends superClass {
        sendFeedback(msg) {
            this.dispatchEvent(new CustomEvent('feedback-message', {
                bubbles: true,
                composed: true,
                detail: msg
            }));
        }
    }
}
customElements.define('feedback-mixin', FeedbackMixin);