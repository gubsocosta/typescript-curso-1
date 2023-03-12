export class NegotiationModel {
    constructor(amount, date, quantity) {
        this._amount = amount;
        this._date = date;
        this._quantity = quantity;
    }
    get amount() {
        return this._amount;
    }
    get date() {
        return this._date;
    }
    get quatity() {
        return this._quantity;
    }
    get volume() {
        return this._amount * this._quantity;
    }
}
