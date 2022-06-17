"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoice = void 0;
class invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes Rp${this.amount} from ${this.details}`;
    }
}
exports.invoice = invoice;
