import { NegotiationList } from "../models/negotiation-list.model.js"
import { BaseView } from './base.view.js'

export class NegotiatioView extends BaseView<NegotiationList>{

  private formatDate(date: Date): string {
    return Intl.DateTimeFormat().format(date)
  }
  
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
            <td>${this.formatDate(negotiation.date)}</td>
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
