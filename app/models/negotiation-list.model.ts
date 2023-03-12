import { NegotiationModel } from "./negotiation.model.js";

export class NegotiationList {
  private negotiations: NegotiationModel[] = []

  add(item: NegotiationModel): void {
    this.negotiations.push(item)
  }

  list(): readonly NegotiationModel[] {
    return this.negotiations
  }
}
