import { NegotiationModel } from "../models/negotiation.model.js";
export class NegotiationController {
    constructor() {
        this.inputAmount = document.querySelector('#amount');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
    }
    formatToDate(input) {
        const regex = /-/g;
        return new Date(input.value.replace(regex, ','));
    }
    add() {
        const amount = parseFloat(this.inputAmount.value);
        const date = this.formatToDate(this.inputDate);
        const quantity = parseInt(this.inputQuantity.value);
        const model = new NegotiationModel(amount, date, quantity);
    }
}
