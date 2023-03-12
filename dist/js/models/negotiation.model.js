export class NegotiationModel {
    constructor(amount, _date, quantity) {
        this.amount = amount;
        this._date = _date;
        this.quantity = quantity;
    }
    get date() {
        return new Date(this._date.getTime());
    }
    get volume() {
        return this.amount * this.quantity;
    }
}
