export class BaseView {
  protected parentElement: HTMLElement;

  constructor(readonly parentSelector: string) {
    this.parentElement = document.querySelector(parentSelector)
  }
}
