export class NegotiationList {
    constructor() {
        this.negotiations = [];
    }
    add(item) {
        this.negotiations.push(item);
    }
    list() {
        return this.negotiations;
    }
}
