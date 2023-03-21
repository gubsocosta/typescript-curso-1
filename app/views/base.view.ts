export abstract class BaseView<T> {
  protected parentElement: HTMLElement;
  private escape = false;

  constructor(parentSelector: string, escape?: boolean) {
    this.parentElement = document.querySelector(parentSelector);
    
    if(escape) {
      this.escape = escape;
    }
  }

  protected abstract template(model: T): string;

  private removeMaliciousCode(template: string): string {
    return template.replace(/<script>[\s\S]*?<\/script>/, "");
  }

  update(model: T) {
    let template = this.template(model);

    if (this.escape) {
      template = this.removeMaliciousCode(template);
    }

    this.parentElement.innerHTML = template;
  }
}
