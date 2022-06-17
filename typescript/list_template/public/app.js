"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_js_1 = require("./classes/Invoice.js");
const ListTemplate_js_1 = require("./classes/ListTemplate.js");
const Payment_1 = require("./classes/Payment");
const form = document.querySelector('.new-item-form');
// inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate_js_1.ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice_js_1.invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment_1.payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
