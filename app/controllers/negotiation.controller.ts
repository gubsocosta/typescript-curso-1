import { NegotiationModel } from "../models/negotiation.model.js"

export class NegotiationController {
  private inputAmount: HTMLInputElement
  private inputDate: HTMLInputElement
  private inputQuantity: HTMLInputElement

  constructor() {
    this.inputAmount = document.querySelector('#amount')
    this.inputDate = document.querySelector('#date')
    this.inputQuantity =  document.querySelector('#quantity')
  }

  private formatToDate(input: HTMLInputElement): Date {
    const regex = /-/g 
    return new Date(input.value.replace(regex, ','))
  }

  private makeNegotiation(): NegotiationModel {
    const amount = parseFloat(this.inputAmount.value)
    const date = this.formatToDate(this.inputDate)
    const quantity = parseInt(this.inputQuantity.value)
  
    return new NegotiationModel(amount, date, quantity)
  }

  add(): void {
    console.log(this.makeNegotiation)
  }
}
