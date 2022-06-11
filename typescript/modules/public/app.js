"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_js_1 = require("./classes/Invoice.js");
const invOne = new Invoice_js_1.invoice("Ismail", "Work on imaco", 250);
const invTwo = new Invoice_js_1.invoice("Nur", "Work on noraco", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // console.log(inv.client, inv.details, inv.amount, inv.format()); untuk details ngga bisa diakses karena acces modifiernya private
    console.log(inv.client, inv.amount, inv.format());
});
