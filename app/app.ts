import { Negotiation } from './models/negotiation.js'

const negotiation = new Negotiation(250, new Date(), 10)

console.log(negotiation.amount)
