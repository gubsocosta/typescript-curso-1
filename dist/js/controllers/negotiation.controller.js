import { NegotiationList } from "../models/negotiation-list.model.js";
import { NegotiationModel } from "../models/negotiation.model.js";
import { MessageView } from "../views/message.view.js";
import { NegotiatioView } from "../views/negotiation.view.js";
export class NegotiationController {
    constructor() {
        this.negotiationList = new NegotiationList();
        this.negotiationView = new NegotiatioView('#negotiation-view');
        this.messageView = new MessageView('#message-view');
        this.inputAmount = document.querySelector('#amount');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.negotiationView.update(this.negotiationList);
    }
    formatToDate(input) {
        const regex = /-/g;
        return new Date(input.value.replace(regex, ','));
    }
    toNegotiation() {
        const amount = parseFloat(this.inputAmount.value);
        const date = this.formatToDate(this.inputDate);
        const quantity = parseInt(this.inputQuantity.value);
        return new NegotiationModel(amount, date, quantity);
    }
    clearForm() {
        this.inputAmount.value = '';
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputDate.focus();
    }
    add() {
        this.negotiationList.add(this.toNegotiation());
        this.negotiationView.update(this.negotiationList);
        this.messageView.update('Negociação adicionada com sucesso');
        this.clearForm();
    }
}
