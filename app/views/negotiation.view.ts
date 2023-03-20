import { NegotiationList } from "../models/negotiation-list.model.js"
import { BaseView } from './base.view.js'

export class NegotiatioView extends BaseView<NegotiationList>{
  
  protected template(negotiationList: NegotiationList): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATE</th>
          <th>QUANTITY</th>
          <th>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        ${negotiationList.list().map(negotiation => {
          return `
          <tr>
            <td>${Intl.DateTimeFormat().format(negotiation.date)}</td>
            <td>${negotiation.quantity}</td>
            <td>${negotiation.amount}</td>
          </tr>
          `
        }).join('')}
      </tbody>
    </table>
    `
  }
}
