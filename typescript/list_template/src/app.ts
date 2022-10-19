import { invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { payment } from './classes/Payment';
import { formater } from './interfaces/HasFormater';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul); 

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: formater;
  if(type.value === 'invoice') {
    doc = new invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
})