class invoice {
  // client: string = "Default Value";
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
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

let invoices: invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);
