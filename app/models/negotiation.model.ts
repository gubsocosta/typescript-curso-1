export class NegotiationModel {
  private _amount: number
  private _date: Date
  private _quantity: number

  constructor (amount: number, date: Date, quantity: number) {
    this._amount = amount
    this._date = date
    this._quantity = quantity
  }

  get amount () {
    return this._amount
  }

  get date () {
    return this._date
  }

  get quatity () {
    return this._quantity
  }

  get volume () {
    return this._amount * this._quantity
  }
}