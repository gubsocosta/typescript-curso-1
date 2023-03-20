import { NegotiationList } from "../models/negotiation-list.model.js";
import { NegotiationModel } from "../models/negotiation.model.js";
import { MessageView } from "../views/message.view.js";
import { NegotiatioView } from "../views/negotiation.view.js";

export class NegotiationController {
  private inputAmount: HTMLInputElement;
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private readonly negotiationList: NegotiationList = new NegotiationList();
  private readonly negotiationView = new NegotiatioView("#negotiation-view");
  private readonly messageView = new MessageView("#message-view");

  constructor() {
    this.inputAmount = document.querySelector("#amount");
    this.inputDate = document.querySelector("#date");
    this.inputQuantity = document.querySelector("#quantity");
    this.negotiationView.update(this.negotiationList);
  }

  private formatToDate(input: HTMLInputElement): Date {
    const regex = /-/g;
    return new Date(input.value.replace(regex, ","));
  }

  private toNegotiation(): NegotiationModel {
    const amount = parseFloat(this.inputAmount.value);
    const date = this.formatToDate(this.inputDate);
    const quantity = parseInt(this.inputQuantity.value);

    return new NegotiationModel(amount, date, quantity);
  }

  private clearForm(): void {
    this.inputAmount.value = "";
    this.inputDate.value = "";
    this.inputQuantity.value = "";
    this.inputDate.focus();
  }

  private refreshView(): void {
    this.negotiationView.update(this.negotiationList);
    this.messageView.update("Negociação adicionada com sucesso");
  }

  add(): void {
    this.negotiationList.add(this.toNegotiation());
    this.clearForm();
  }
}
