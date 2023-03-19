export class MessageView {
  private parentElement: HTMLElement

  constructor(readonly parentSelector: string) {
    this.parentElement = document.querySelector(parentSelector)
  }

  template(model: string): string {
    return `<p class="alert alert-info">${model}</p>`
  }

  update(model: string): void {
    const template = this.template(model)
    this.parentElement.innerHTML = template
  }
}
