export class NegotiationController {
  private inputAmount
  private inputDate
  private inputQuantity

  constructor() {
    this.inputAmount = document.querySelector('#amount')
    this.inputDate = document.querySelector('#date')
    this.inputQuantity =  document.querySelector('#quantity')
  }

  add() {
    console.log(this.inputAmount, this.inputDate, this.inputQuantity)
  }
}
