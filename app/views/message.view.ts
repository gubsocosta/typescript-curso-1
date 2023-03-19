import { BaseView } from './base.view.js'

export class MessageView extends BaseView<string> {

  template(model: string): string {
    return `<p class="alert alert-info">${model}</p>`
  }
}
