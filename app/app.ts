import { NegotiationController } from "./controllers/negotiation.controller.js"
import { NegotiatioView } from "./views/negotiation.view.js"

const controller = new NegotiationController()
const form = document.querySelector('.form')

form.addEventListener('submit', event => {
  event.preventDefault()
  controller.add()
})
