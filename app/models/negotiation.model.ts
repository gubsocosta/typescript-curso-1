import { DateUtils } from "../utils/date.utils.js";

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

  static createFrom(amountString: string, dateString: string, quantityString: string): NegotiationModel {
    const parsedAmount = parseFloat(amountString);
    const parsedDate = DateUtils.convertStringToDate(dateString);
    const parsedQuantity = parseInt(quantityString);

    return new NegotiationModel(parsedAmount, parsedDate, parsedQuantity);
  }
}
