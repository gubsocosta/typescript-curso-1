import { logTotalRunningTime } from '../decorators/log-total-running-time.decorator.js';
import { NegotiationList } from '../models/negotiation-list.model.js';
import { NegotiationModel } from '../models/negotiation.model.js';
import { DateUtils } from '../utils/date.utils.js';
import { MessageView } from '../views/message.view.js';
import { NegotiatioView } from '../views/negotiation.view.js';

export class NegotiationController {
  private inputAmount: HTMLInputElement;
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private readonly negotiationList: NegotiationList = new NegotiationList();
  private readonly negotiationView = new NegotiatioView('#negotiation-view');
  private readonly messageView = new MessageView('#message-view');

  constructor() {
    this.inputAmount = document.querySelector('#amount') as HTMLInputElement;
    this.inputDate = document.querySelector('#date') as HTMLInputElement;
    this.inputQuantity = document.querySelector(
      '#quantity'
    ) as HTMLInputElement;
    this.negotiationView.update(this.negotiationList);
  }

  private clearForm(): void {
    this.inputAmount.value = '';
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputDate.focus();
  }

  private refreshView(): void {
    this.negotiationView.update(this.negotiationList);
    this.messageView.update('Negociação adicionada com sucesso');
  }

  @logTotalRunningTime()
  add(): void {
    const negotiation = NegotiationModel.createFrom(
      this.inputAmount.value,
      this.inputDate.value,
      this.inputQuantity.value
    );

    if (!DateUtils.isBussinesDay(negotiation.date)) {
      this.messageView.update(
        'Apenas negociações em dias úteis são permitidas'
      );
      return;
    }

    this.negotiationList.add(negotiation);
    this.refreshView();
    this.clearForm();
  }
}
