import { formater } from '../interfaces/HasFormater';

export class invoice {
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