"use strict";
class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes Rp${this.amount} from ${this.details}`;
    }
}
const invOne = new invoice("Ismail", "Work on imaco", 250);
const invTwo = new invoice("Nur", "Work on noraco", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
