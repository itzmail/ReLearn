"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_js_1 = require("./classes/Invoice.js");
const Payment_1 = require("./classes/Payment");
const invOne = new Invoice_js_1.invoice("Ismail", "Work on imaco", 250);
const invTwo = new Invoice_js_1.invoice("Nur", "Work on noraco", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // console.log(inv.client, inv.details, inv.amount, inv.format()); untuk details ngga bisa diakses karena acces modifiernya private
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice_js_1.invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment_1.payment(toFrom.value, details.value, amount.valueAsNumber);
    }
});
