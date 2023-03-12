export class NegotiationController {
    constructor() {
        this.inputAmount = document.querySelector('#amount');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
    }
    add() {
        console.log(this.inputAmount, this.inputDate, this.inputQuantity);
    }
}
