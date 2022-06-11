class invoice {
  // client: string = "Default Value";
   //readonly client: string;
  //private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {
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

invoices.forEach(inv => {
  // console.log(inv.client, inv.details, inv.amount, inv.format()); untuk details ngga bisa diakses karena acces modifiernya private
  console.log(inv.client, inv.amount, inv.format());
});
