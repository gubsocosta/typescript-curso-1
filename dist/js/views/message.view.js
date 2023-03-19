export class MessageView {
    constructor(parentSelector) {
        this.parentSelector = parentSelector;
        this.parentElement = document.querySelector(parentSelector);
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
    update(model) {
        const template = this.template(model);
        this.parentElement.innerHTML = template;
    }
}
