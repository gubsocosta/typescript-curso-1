import { NegotiationController } from './controllers/negotiation.controller.js';
import { SelectorNotExistException } from './exceptions/selector-not-exist.exception.js';

const controller = new NegotiationController();
const parentFormSelector = '.form';
const form = document.querySelector(parentFormSelector);

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.add();
  });
} else {
  throw new SelectorNotExistException(parentFormSelector) 
}
