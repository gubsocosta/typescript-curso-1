export abstract class BaseView<T> {
  protected parentElement: HTMLElement;

  constructor(readonly parentSelector: string) {
    this.parentElement = document.querySelector(parentSelector)
  }

  protected abstract template(model: T): string;

  update(model: T) {
    this.parentElement.innerHTML = this.template(model)
  }
}
