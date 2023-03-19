export class BaseView<T> {
  protected parentElement: HTMLElement;

  constructor(readonly parentSelector: string) {
    this.parentElement = document.querySelector(parentSelector)
  }

  template(model: T): string {
    throw new Error('method not implemented')
  }

  update(model: T) {
    this.parentElement.innerHTML = this.template(model)
  }
}
