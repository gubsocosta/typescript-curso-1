export class NegotiationModel {
  constructor(
    public readonly amount: number,
    private _date: Date,
    public readonly quantity: number
  ) {}

  get date(): Date {
    return new Date(this._date.getTime());
  }

  get volume(): number {
    return this.amount * this.quantity;
  }
}
