export class SelectorNotExistException extends Error {
  constructor(selector: string) {
    super(`O selector ${selector} não existe no DOM.`);

    this.name = 'SelectorNotExistException';

    Error.captureStackTrace(this, this.constructor);
  }
}
