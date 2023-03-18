export class NegotiatioView {
    constructor(parentElementSelector) {
        this.parentElement = document.querySelector(parentElementSelector);
    }
    template(negotiationList) {
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
          `;
        }).join('')}
      </tbody>
    </table>
    `;
    }
    update(negotiationList) {
        this.parentElement.innerHTML = this.template(negotiationList);
    }
}
