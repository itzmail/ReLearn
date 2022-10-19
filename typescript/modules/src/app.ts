import { invoice } from './classes/Invoice.js';
import { payment } from './classes/Payment';
import { formater } from './interfaces/HasFormater';

const invOne = new invoice("Ismail", "Work on imaco", 250);
const invTwo = new invoice("Nur", "Work on noraco", 300);

let invoices: invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  // console.log(inv.client, inv.details, inv.amount, inv.format()); untuk details ngga bisa diakses karena acces modifiernya private
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: formater;
  if(type.value === 'invoice') {
    doc = new invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new payment(toFrom.value, details.value, amount.valueAsNumber);
  }
})