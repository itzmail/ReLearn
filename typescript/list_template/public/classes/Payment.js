"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
class payment {
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recepient} owes Rp${this.amount} from ${this.details}`;
    }
}
exports.payment = payment;
