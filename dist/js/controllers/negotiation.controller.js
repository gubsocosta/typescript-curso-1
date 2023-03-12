import { NegotiationList } from "../models/negotiation-list.model.js";
import { NegotiationModel } from "../models/negotiation.model.js";
export class NegotiationController {
    constructor() {
        this.negotiationList = new NegotiationList();
        this.inputAmount = document.querySelector('#amount');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
    }
    formatToDate(input) {
        const regex = /-/g;
        return new Date(input.value.replace(regex, ','));
    }
    makeNegotiation() {
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
        this.negotiationList.add(this.makeNegotiation());
        console.log(this.negotiationList.list());
        this.clearForm();
    }
}
