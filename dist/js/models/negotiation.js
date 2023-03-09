export class Negotiation {
  #amount
  #date
  #quantity

  constructor (amount, date, quantity) {
    this.#amount = amount
    this.#date = date
    this.#quantity = quantity
  }

  get amount () {
    return this.#amount
  }

  get date () {
    return this.#date
  }

  get quatity () {
    return this.#quantity
  }

  get volume () {
    return this.#amount * this.#quantity
  }
}