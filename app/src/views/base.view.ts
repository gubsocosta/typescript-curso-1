import { logTotalRunningTime } from '../decorators/log-total-running-time.decorator.js';
import { SelectorNotExistException } from '../exceptions/selector-not-exist.exception.js';

export abstract class BaseView<T> {
  protected parentElement: HTMLElement;
  private escape = false;

  protected abstract template(model: T): string;

  constructor(parentSelector: string, escape?: boolean) {
    this.setParentElement(parentSelector);

    if (escape) {
      this.escape = escape;
    }
  }

  private setParentElement(parentSelector: string): void {
    const parentElement = document.querySelector(parentSelector);

    if (!parentElement) {
      throw new SelectorNotExistException(parentSelector);
    }

    this.parentElement = document.querySelector(parentSelector) as HTMLElement;
  }

  private removeMaliciousCode(template: string): string {
    return template.replace(/<script>[\s\S]*?<\/script>/, '');
  }

  @logTotalRunningTime()
  update(model: T) {
    let template = this.template(model);

    if (this.escape) {
      template = this.removeMaliciousCode(template);
    }

    this.parentElement.innerHTML = template;
  }
}
