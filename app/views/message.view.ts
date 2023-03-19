import { BaseView } from './base.view.js'

export class MessageView extends BaseView {

  template(model: string): string {
    return `<p class="alert alert-info">${model}</p>`
  }

  update(model: string): void {
    const template = this.template(model)
    this.parentElement.innerHTML = template
  }
}
